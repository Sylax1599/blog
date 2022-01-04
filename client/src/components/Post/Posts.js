import React from 'react'
import { useSelector } from 'react-redux';
import { Post } from './Post/Post'

import useStyles from './styles';
import {Grid, CircularProgress} from '@material-ui/core'
    

export const Posts = React.memo (({setCurrentId}) => {


    const classes= useStyles();

    const {posts , isLoading} = useSelector(state => state.posts)

   
    if(!posts.length && !isLoading)
    return 'No posts'
   
    return (
        isLoading 
        ? 
        <CircularProgress />
        :
        ( 
            <Grid className={classes.container} container alignItems="stretch" spacing={4} >
                {
                    posts.map( (post) => (
                        <Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
})
