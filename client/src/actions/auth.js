import * as api from '../api';
import {AUTH} from '../types/actions';


export const signIn=(formData, history)=> async (dispatch) =>{
    try {
        //Log in the user
        
        const {data}= await api.signIn(formData);

        const action={
            type: AUTH,
            data
        }
        dispatch(action);


        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signUp=(formData, history)=> async (dispatch) =>{
    try {
        //sign up the user

        const {data}= await api.signUp(formData);

        const action={
            type: AUTH,
            data
        }
        dispatch(action);
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}