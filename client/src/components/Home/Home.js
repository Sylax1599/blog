import React, { useEffect, useState } from 'react';
import {Container, Grow, Grid, Paper, AppBar, TextField, Button} from '@material-ui/core'
import {useHistory, useLocation} from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import {Posts} from '../Post/Posts';
import { Form } from '../Form/Form';
import { useDispatch } from 'react-redux';
import { getPosts, getPostsBySearch } from '../../actions/post';
import '../styles.css'
import { Paginate } from '../Pagination';
import useStyles from './styles';
import { Featured } from './Featured';


function useQuery(){
    return new URLSearchParams(useLocation().search);

}

export const Home = () => {

    

    const [currentId, setCurrentId] = useState(null);

    const dispatch=useDispatch();

    const query= useQuery();

    const history= useHistory();

    const page= query.get('page') || 1;

    const searchQuery= query.get('searchQuery');

    const classes= useStyles();

    const [search, setSearch] = useState('');


    const [tags, setTags] = useState([]);


    

    

    const handleKeyPress= (e)=>{
        //si le da al enter
        if(e.keyCode===13){
            //search post
            searchPost()
        }
    }

    const handleAdd=(tag)=>setTags([...tags, tag]);

    const handleDelete=(tagDelete)=>setTags(tags.filter((tag)=> tag !== tagDelete));


    const searchPost= () =>{
        if(search.trim() || tags){
            //dispatch -> fetch search post
            dispatch(getPostsBySearch({search, tags: tags.join(',')}))
            history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)

        }
        else{
            history.push('/')
        }
    }

    return (
        <>
         <div className="background">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </div> 
        <Featured />
        
        <Grow in>

        
            
                <Container maxWidth="xl">
                
                    <Grid container className={classes.gridContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={6} md={9}>
                            <Posts  setCurrentId={setCurrentId} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <AppBar className={classes.appBarSearch} position="static" color="inherit">
                                <TextField 
                                className={classes.input}
                                name="search" 
                                variant="outlined" 
                                 label="Search Posts"
                                 onKeyPress={handleKeyPress}
                                 fullWidth
                                 value={search}
                                 onChange={(e)=>setSearch(e.target.value)}
                                 />

                                 <ChipInput 
                                 className={classes.input}
                                variant="outlined" 
                                style={{margin:'10px 0'}}
                                value={tags}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                label="Buscar tags"
                                />

                                <Button
                                onClick={searchPost}
                                style={{
                                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                                    border: 0,
                                    borderRadius: '3px',
                                    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                                    color: '#fff',
                                    margin: '10px 10px',
                                   
                                    }} 
                                variant="contained"
                                >
                                    Buscar
                                </Button>

                            </AppBar>

                            
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                            {(!searchQuery && !tags.length)
                            &&(
                            <Paper  elevation={6} className={classes.pagination}>

                            <Paginate page={page} />

                            </Paper>
                            )
                            }
                            
                            

                        </Grid>
                    </Grid>
                    
                </Container>

                
        </Grow>
        </>
    )
}
