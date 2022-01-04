import React, { useEffect, useState } from 'react';

import useStyles from './styles';

import {useDispatch, useSelector} from 'react-redux'
import FileBase from 'react-file-base64';
import { Button, Paper, TextField, Typography } from '@material-ui/core';
import { createPost, updatePost } from '../../actions/post';
import { useHistory } from 'react-router-dom';

const initialState={
   
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
}

//Get la ID seleccinada

export const Form = ({currentId, setCurrentId}) => {
    
    const classes= useStyles();
    const [postData, setPostData] = useState(initialState);

    const post = useSelector(state => currentId ? state.posts.posts.find((p)=>p._id === currentId): null)

    const {creator,
        title,
        message,
        tags,
        selectedFile,
        }= postData;

    const dispatch = useDispatch();

    const history=useHistory();

    useEffect(() => {
      
      if(post) setPostData(post);
      
    }, [post])

    const user= JSON.parse(localStorage.getItem('profile'));

    const handleSubmit= (e) =>{
        e.preventDefault();
        
        if(currentId){
          dispatch(updatePost(currentId, {...postData,name: user?.result?.name}))
          
          
        }
        else{
          dispatch(createPost({...postData,name: user?.result?.name}, history));
         
        }

        clear();


        
    }



    if(!user?.result?.name){
      return(
        <Paper className={classes.paper} elevation={6}>
          <Typography className={classes.alert} align="center">
          Inicia sesión para publicar, comentar o dar like
          </Typography>
        </Paper>
      )
    }

    

    

    const clear=()=>{
      setCurrentId(null);

      setPostData(initialState);
    }

  
    

    
    return (
        
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography className={classes.titleForm} variant="h5">
            {currentId? 'Editar': 'Crear'} recuerdo
            </Typography>
            
             <TextField
              margin="normal"
              className={classes.input}
              fullWidth
              id="title"
              label="Titulo"
              name="title"
              variant="outlined"
              value={title}
              onChange={(e) => setPostData({...postData,title: e.target.value})}
            />

             <TextField
              margin="normal"
              className={classes.input}
              fullWidth
              id="message"
              label="Contenido"
              name="message"
              variant="outlined"
              value={message}
              onChange={(e) => setPostData({...postData,message: e.target.value})}
            />

             <TextField
              className={classes.input}
              margin="normal"
              fullWidth
              id="tags"
              label="tags(separados por coma)"
              name="tags"
              variant="outlined"
              value={tags}
              onChange={(e) => setPostData({...postData,tags: e.target.value.split(',')})}
            />

            <div className={classes.fileInput}>

                <FileBase 
                className={classes.file}
                type="file"
                multiple={false}
                onDone={({base64})=> setPostData({...postData, selectedFile: base64})}
                />

            </div>
            
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="primary"
              style={{background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              border: 0,
              borderRadius: 2,
              boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
              color: 'white',
              height: 42,
              padding: '0 20px'}}
            >
              Guardar
            </Button>

            <Button
              onClick={clear}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{marginTop: '5px'}}
              color="secondary"
            >
              Borrar
            </Button>

            </form>
        </Paper>
    )
}
