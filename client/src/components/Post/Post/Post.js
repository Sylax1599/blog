import React, {useState} from 'react';
import useStyles from './styles';
import {Card, CardActions, ButtonBase, CardContent, CardMedia, Button, Typography, IconButton, Avatar, CardHeader} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreHoriz';
import ExpandMore from '@material-ui/icons/Delete';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {useHistory} from 'react-router-dom'
import {deletePost, likePost} from '../../../actions/post';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

export const Post = ({post, setCurrentId}) => {
    const classes= useStyles();
    const history=useHistory();

    const [likes, setLikes] = useState(post?.likes);

    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('profile'));

    const openPost= () => history.push(`/posts/${post._id}`)
    
    
    const hasLikedPost=post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id));

    const userId=user?.result.googleId || user?.result._id;


    const handleClickLike= async()=>
    {
        dispatch(likePost(post._id))

        if (hasLikedPost){
            setLikes(post.likes.filter((id)=> id!== userId))

        }
        else{
            setLikes([...post.likes, userId]);
            
        }

    }

    const Likes = () => {
        if (likes.length > 0) {
          return likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? 
            (
              <>
              <ThumbUpAltIcon fontSize="small" 
              className={classes.like}
              style={{marginRight: '4px'}} />
              <Typography className={classes.like}>
              &nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }
              </Typography>
              </>
            ) : 
            (
              <>
              <ThumbUpAltOutlined fontSize="small"
              className={classes.like}
              
              />
              <Typography className={classes.like}>
              &nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}
              </Typography>
              </>
            );
        }
    
        return <>
        <ThumbUpAltOutlined className={classes.like} fontSize="small" />
        <Typography className={classes.like}>
        &nbsp;Like
        </Typography>
        </>;
    };

    
     

    return (
        <Card style={{ width: '100%'}} className={classes.card} raised elevation={6}>
            
            
                
            
                <CardHeader
                    avatar={
                    <Avatar className={classes.purple} sx={{ bgcolor: 'red' }} aria-label="recipe">
                        A
                    </Avatar>
                    }
                    action={
                        
                            (user?.result?.googleId === post?.creator || user?.result?._id=== post.creator) && 
                            (
                                <IconButton 
                                onClick={()=> setCurrentId(post._id)}
                                aria-label="settings">
                                    <MoreVertIcon className={classes.like}  />
                                </IconButton>
                            )
                        
                    
                    }
                    className={classes.headerTitle}
                    title={post.name}
                    subheader={
                        <p className={classes.subheader}>
                        {moment(post.createdAt).fromNow()}
                        </p>
                    }
                />
                <div onClick={openPost} style={{cursor: 'pointer'}}>
                <CardMedia
                    component="img"
                    height="194"
                    image={post.selectedFile}
                    alt={post.title}
                />
                <CardContent>
                    <Typography className={classes.tag}>
                            {post.tags.map((tag)=> `#${tag} `)}
                        </Typography>
                    <Typography className={classes.title} gutterBottom>
                        {post.title}
                    </Typography>
                    <Typography className={classes.body} >
                        {post.message}
                    </Typography>
                </CardContent>
            
                </div>
            <CardActions  className={classes.cardActions}>
                <IconButton 
                disabled={!user?.result}
                aria-label="Like"
                onClick={handleClickLike}
                >
               
                <Likes/>
                
                </IconButton>
            
                {
                    (user?.result?.googleId === post?.creator || user?.result?._id=== post.creator) && (
                        <IconButton aria-label="Delete"
                        onClick={()=> dispatch(deletePost(post._id)) }
                        >
                            <ExpandMoreIcon className={classes.delete} fontSize="small" />
                        </IconButton>
                    )
                }
                
                
                
            </CardActions>
            

        </Card>
    )
}
