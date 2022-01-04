import { 
CREATE,
UPDATE,
DELETE,
FETCH_ALL,
LIKE,
START_LOADING,
END_LOADING,
FETCH_BY_SEARCH,
FETCH_POST,
COMMENT

} from "../types/actions";

const initialState={
    posts: [],
    isLoading: true
}



const posts = (state=initialState, action) => {
    switch (action.type) {

        case START_LOADING:
            return{
                ...state,
                isLoading: true
            }
        case END_LOADING:
            return{
                ...state,
                isLoading: false
            }

        case COMMENT:
            return{
                ...state,
                posts: state.posts.map((post)=>{

                    //cambiamos el post que ha recibido un comentario
                    
                    if(post._id===action.payload._id){
                        return action.payload;
                    }
                    //retornamos todos los post normalmente
                    return post;
                })
            }

        case FETCH_POST:
            return{
                ...state,
                post: action.payload.data
            }
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages
            };
        case FETCH_BY_SEARCH:
            return {
                ...state,
                posts: action.payload
            };
        case CREATE:
            return {
                ...state,
                posts: [...state.posts,action.payload]
            };
        case UPDATE:
            return {
                ...state,
                posts: state.posts.map((post)=> post._id===action.payload._id ? action.payload : post)
            };

        case DELETE:
            return {
                ...state,
                posts: state.posts.filter((post)=> post._id!==action.payload)
            };

        case LIKE:
            return {
                ...state,
                posts: state.posts.map((post)=> post._id===action.payload._id ? action.payload : post)
            };
    
        default:
            return state;
    }
}

export default posts