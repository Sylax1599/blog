
import axios from 'axios';

//URL local http://localhost:5000
//URL heroku https://blog-project-sylax.herokuapp.com
const API= axios.create({ baseURL: 'https://blog-project-sylax.herokuapp.com'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization= `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})

//const url='https://blog-project-sylax.herokuapp.com/posts';

export const fetchPosts= (page) => API.get(`/posts?page=${page}`);
export const fetchPost= (id) => API.get(`/posts/${id}`);


export const createPost= (newPost) => API.post('/posts', newPost);

export const updatePost=(id, updatePost) => API.patch(`/posts/${id}`,updatePost )
export const deletePost= (id) => API.delete(`/posts/${id}`);

export const likePost= (id) => API.patch(`/posts/${id}/likePost`);
export const comment= (value, id) => API.post(`/posts/${id}/commentPost`, {value});


export const signIn= (formData) => API.post('/users/signin', formData);
export const signUp= (formData) => API.post('/users/signup', formData);

//buscar filtros
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
