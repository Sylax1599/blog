import * as api from '../api';
import {CREATE,
    UPDATE,
    COMMENT,
    DELETE,
    FETCH_ALL,
    START_LOADING,
    END_LOADING,
    FETCH_POST,
    LIKE, FETCH_BY_SEARCH} from '../types/actions';

//Action creators


export const getPosts= (page) => async (dispatch)=>{

    try {

        dispatch({type: START_LOADING})

        const {data}= await api.fetchPosts(page);
        const action={
            type: FETCH_ALL,
            payload: data
        }
    
        dispatch (action);

        dispatch({type: END_LOADING})
        
    } catch (error) {
        console.log(error.message);
    }

    
}

export const getPost= (id) => async (dispatch)=>{

    try {

        dispatch({type: START_LOADING})

        // log del data sin restructuración y verás por qué hubo que reesctructurarlo
        // solo el {data}, traía {ok: true, data}
        //se hace esto para llamar a una const data, lo que está en data

        const {data}= await api.fetchPost(id);
        
        
        const action={
            type: FETCH_POST,
            payload: data
        }
    
        dispatch (action);

        dispatch({type: END_LOADING})
        
    } catch (error) {
        console.log(error.message);
    }

    
}

export const getPostsBySearch=(searchQuery)=> async (dispatch)=>{
    try {
        dispatch({type: START_LOADING})

        
        
        const {data: {data}}= await api.fetchPostsBySearch(searchQuery);

        
        
        const action={
            type: FETCH_BY_SEARCH,
            payload: data
        }
    
        dispatch (action);

        dispatch({type: END_LOADING})

        
    } catch (error) {
        console.log(error);
    }
}

export const createPost= (post, history) =>async (dispatch) =>{
    try {
        const {data}= await api.createPost(post)
        const newPost= data.newPost;

         
        history.push(`/posts/${newPost._id}`);

        const action={
            type: CREATE,
            payload: newPost
        }
    
        dispatch(action)
    } catch (error) {
        console.log(error);
    }
}



export const updatePost= (id, post)=> async (dispatch)=>{
    try {
        const {data}= await api.updatePost(id, post);
        
        
        const action={
            type: UPDATE,
            payload: data.updatedPost
        }
        dispatch(action)
    } catch (error) {
        console.log(error);
    }
}



export const deletePost=(id)=> async (dispatch) =>{
    try {
        await api.deletePost(id);
        
        const action={
            type: DELETE,
            payload: id
        }

        dispatch(action)
    } catch (error) {
        console.log(error);
    }
}

export const likePost= (id) => async (dispatch)=>{
    
    const {data}= await api.likePost(id);

    const action={
        type: LIKE,
        payload: data
    }

    dispatch(action)


}

export const commentPost= (value, id) => async (dispatch) =>{

    try {
        const {data}=await api.comment(value,id);

        const action={
            type: COMMENT,
            payload: data.updatedPost
        }

        dispatch(action);
        return data.updatedPost.comments;

    } catch (error) {
        console.log(error.message);
    }

} 