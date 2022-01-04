import mongoose  from "mongoose";
import PostMessage from "../models/postMessage.js";


export const getPost= async (req, res)=>{
    const {id}= req.params;

    try {

        const post= await PostMessage.findById(id);

        res.status(200).json({
            ok: true,
            data: post
        })
        
    } catch (error) {
        res.status(404).json({
            ok: false,
            message: error.message
        })
    }
}

export const getPosts= async (req, res)=>{

    const {page} = req.query;


    try {

        const LIMIT=6;
        //obtener el inicio de cualquier pagina, este calculo es más general
        const startIndex= (Number(page) - 1 ) * LIMIT;

        const total= await PostMessage.countDocuments({})

        //ordenar los posts de los más nuevos a los mas antiguos sort({_id: -1})
        //limit cantidad de registros
        //skip para que empiece a traer desde por ejemplo el doc num 8, y se salte lso anteriores
        //para eso se hizo ese calculo

        const posts= await PostMessage.find().sort({_id: -1}).limit(LIMIT).skip(startIndex);

        

        res.status(200).json({
            ok: true,
            data: posts,
            currentPage: Number(page),
            numberOfPages: Math.ceil(total/LIMIT)
        });

    } catch (error) {
        res.status(404).json({
            ok: false,
            message: error.message
        })
    }
}



export const createPost=  async (req, res)=>{

    const post = req.body;

    const newPost= new PostMessage({...post, creator: req.userId, createdAt: new Date().toISOString()});
    


    try {

        await newPost.save();

        res.status(201).json({
            ok: true,
            newPost
        })
        
    } catch (error) {
        res.status(409).json({
            ok: false,
            message: error.message
        })
    }
}

// posts/id

export const updatePost=async (req, res) =>{
    const{id: _id}= req.params;
    const post= req.body;

    if(!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No post con esa id')

    const updatedPost= await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {
        new: true
    })

    res.json({
        ok: true,
        updatedPost
    })
}


export const deletePost= async (req, res) =>{
    const {id}= req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No post con esa id')

    await PostMessage.findOneAndRemove(id);

    res.json({
        message: 'Post Deleted'
    })
}

export const likePost= async (req, res)=>{
    const {id}= req.params;
    if(!req.userId)
    return res.json({
        message: 'No auntenticado'
    })

    if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No post con esa id')


    const post= await PostMessage.findById(id);

    const index= post.likes.findIndex((id)=> id===String(req.userId))

    if(index===-1){
        //like the post
        post.likes.push(req.userId)
    }
    else{
        //dislike a post
        post.likes= post.likes.filter((id)=> id!== String(req.userId))
    }



    const updatedPost= await PostMessage.findByIdAndUpdate(id, post, {new: true})

    res.json(updatedPost)
}

export const commentPost=async (req, res) =>{
    //esto es lo que viene de la URL
    const {id}= req.params;
    //esto es lo que viene del body, {value}
    const {value}= req.body;

    //obtenemos el post de la base de datos
    const post= await PostMessage.findById(id);

    //le agregamos el campo comments
    post.comments.push(value);

    //lo actualizamos en la bdd
    const updatedPost= await PostMessage.findByIdAndUpdate(id, post, {new: true})

    res.json({
        ok: true,
        updatedPost
    })

}

//QUERY ->  /posts?page=1  -> page=1

//PARAMS -> /posts/123   -> id=123

export const getPostBySearch= async(req, res)=>{
    
    const {searchQuery, tags}= req.query;



    try {
        const title= new RegExp(searchQuery, 'i');

        const posts = await PostMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});

        res.json({data: posts});
        
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}