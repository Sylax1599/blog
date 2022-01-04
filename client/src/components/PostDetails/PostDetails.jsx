import React, {useEffect} from 'react'
import {Grid, Typography, CircularProgress, Divider} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {useParams, useHistory} from 'react-router-dom';
import {getPost, getPostsBySearch} from '../../actions/post';
import useStyles from './styles';
import { CommentSection } from './CommentSection';


export const PostDetails = () => {

     const {post,posts, isLoading} = useSelector(state => state.posts)

     const dispatch=useDispatch();

     const {id}= useParams();

    const classes=useStyles();

    const history=useHistory();


    //POSTS/id


     useEffect(() => {
         dispatch(getPost(id));
        
     }, [id])

     useEffect(() => {
       if(post)
       dispatch(getPostsBySearch({search: 'none', tags: post?.tags.join(',')}))

     }, [post])

     if(!post) return null;

     if (isLoading) {
         return (
           <>
           <div className="background">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            
            </div>
             <CircularProgress size="7em" />
           </>
         );
       }

    
     const recommendedPosts= posts.filter(({_id})=> _id !==post._id )
    
    
    const openPost=(_id)=> history.push(`/posts/${_id}`)
    
    return (
      <>
      <div className="background">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            
        </div>

        
                <div className={classes.card}>
                <div className={classes.section}>
                <Typography className={classes.title}>{
                post.title
               
                }
                
                </Typography>
                <Typography gutterBottom className={classes.tags} >
                  {
                  post.tags.map((tag) => `#${tag} `)
                  
                  }
                 
                  </Typography>
                <Typography gutterBottom className={classes.message}>
                  {
                  post.message

                  }
                  </Typography>
                <Typography className={classes.createdBy}>Creador por: {
                post.name
              }
              </Typography>

              <Typography className={classes.date}>{
                moment(post.createdAt).fromNow()
              }
              
              </Typography>
                <Divider style={{ margin: '20px 0', background: 'rgba( 200, 200, 200, 0.18 )' }} />
                {
                  <CommentSection post={post}/>
                }
                <Divider style={{ margin: '20px 0', background: 'rgba( 200, 200, 200, 0.18 )' }} />
                </div>
                <div className={classes.imageSection}>
                <img className={classes.media} src={
                  post.selectedFile || 
                  'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
                  width="200px"
                  height="auto"
                  alt="title" />
                </div>
            </div>
            { 
              recommendedPosts.length && (
                
                <div className={classes.section}> 
                  <Typography gutterBottom className={classes.createdBy}>
                    Recomendado:
                  </Typography>
                  <Divider style={{background: 'rgba( 200, 200, 200, 0.18 )' }}/>

                  <Grid container alignItems="stretch" spacing={3} >
                      
                          {recommendedPosts.map(({_id,title, message, name, likes, selectedFile})=> 
                         <Grid key={_id} item xs={12} sm={12} md={6} lg={4}>
                            <div className={classes.postRecommendedStyle} style={{margin: '20px', cursor: 'pointer'}} onClick={()=> openPost(_id)} key={_id} >
                                <Typography gutterBottom className={classes.titleRecommended}>
                                  {title}
                                </Typography>
                                <Typography gutterBottom className={classes.createdByRecommended}>
                                  {name}
                                </Typography>
                                <Typography gutterBottom className={classes.message}>
                                  {message}
                                </Typography>
                                <Typography gutterBottom className={classes.date}>
                                  Likes: {likes.length}
                                </Typography>
                                <img src={selectedFile} className={classes.foto} />
                              </div>
                          </Grid>
                          )}
                      
                    </Grid>
                </div>
              )
            }  

    </>
    )
}
