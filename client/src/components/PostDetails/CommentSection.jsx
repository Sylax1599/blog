import React, { useReducer, useRef, useState } from 'react';

import {Typography, TextField, Button} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux';

import useStyles from './styles';
import {commentPost} from '../../actions/post';



export const CommentSection = ({post}) => {

    
    const {comments: commentsArray} = useSelector(state => state.posts.post)

    const classes=useStyles();
    const dispatch = useDispatch();

    const [comments, setComments] = useState(commentsArray);
    const [comment, setComment] = useState('')

    const user= JSON.parse(localStorage.getItem('profile'));

    //Para poner el cursor al ultimo comentario que fune insertado ,usaremos el useRef

    const commentsRef= useRef();

    const handleClick= async () =>{

        const finalComment=`${user.result.name}: ${comment}`;

        const newComments= await dispatch(commentPost(finalComment, post._id));

        await setComments(newComments)
        setComment('');

        //queremos que se desplaze al <div ref={commentsRef} />

        commentsRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom className={classes.commentSection}>
                        Comentarios
                    </Typography>
                    <div ref={commentsRef} />
                    {
                        comments.map( (c,i)=> (
                            <Typography key={i} gutterBottom className={classes.comment}>
                             <strong>
                             {c.split(': ')[0]}
                             </strong>:
                             {c.split(':')[1]}
                            </Typography>
                        ))
                    }
                    

                </div>  
                {
                    user?.result?.name && (
                        <div style={{width: '70%'}}>
                        <Typography gutterBottom className={classes.commentSection}>
                                Deja tu comentario
                        </Typography>
                        <TextField 
                        fullWidth
                        className={classes.input}
                        rows={4}
                        variant="outlined"
                        label="Comentar"
                        multiline
                        value={comment}
                        onChange={(e)=> setComment(e.target.value)}
                        />
                        <Button className={classes.commentButton}  fullWidth disabled={!comment} variant="contained" onClick={handleClick}>
                            Comentar
                        </Button>
                    </div>
                    )
                }
                
            </div>
        </div>
    )
}
