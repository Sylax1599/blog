import React, { useState } from 'react';

import {Avatar, Container,
     Button,
      Grid, Typography} from '@material-ui/core'

 import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

 import useStyles from './styles';

 import Input from './Input';

 import {useHistory} from 'react-router-dom'

 import GoogleButton from 'react-google-button'
 import {GoogleLogin} from 'react-google-login';
import { useDispatch } from 'react-redux';

import {signIn, signUp } from '../../actions/auth';


const initialState={
  firstName: '',
  lastName:'',
  email:'',
  password:'',
  confirmPassword: ''
}

export const Auth = () => {

    const classes = useStyles();

    const [formData, setFormData] = useState(initialState);

    const [showPassword, setShowPassword] = useState(false)

    const [isSignup, setisSignup] = useState(false);

    
    const dispatch = useDispatch();
    const history=useHistory();


    const handleSubmit= (e) =>{
        e.preventDefault();
        //Es decir, si le dio en iniciar sesión como usuario
        if(isSignup){
          dispatch(signUp(formData, history))
        }
        else{
        //Si le dio en registrar
        dispatch(signIn(formData, history))
        }
    }

    const handleChange= (e) =>{
      setFormData({...formData, [e.target.name]: e.target.value})
    
    }


    const handleShowPassword= ()=> setShowPassword((prevShowPassword)=>  !prevShowPassword);


    const switchMode= ()=>{
        setisSignup(!isSignup);
        setShowPassword(false)
    }

    const googleSuccess= async (res)=>{
        const result= res?.profileObj //si existe, you know

        const token= res?.tokenId;

        try {
            const action={
                type: 'AUTH',
                data: {
                    result, token
                }
            }
            dispatch(action);

            history.push('/');

        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure= (error)=>{
        console.log(error);
        console.log("Google Sign in tuve un error");
    }

    const handleHome=()=>{
      history.push('/');
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
        <Container component="main" maxWidth="xs">
          
          <div className={classes.container}>

              <div className={classes.blur} >

              
          
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography className={classes.title} >{ isSignup ? 'Registrarse' : 'Iniciar sesión' }</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    { isSignup && (
                    <>
                      <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                      <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                    </>
                    )}
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                    { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                  </Grid>
                  <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    { isSignup ? 'Registrarse' : 'Iniciar sesión' }
                  </Button>

                  <GoogleLogin 
                  clientId="665271276249-i378v02fsq6e7oave6jki8bkv7oefv8e.apps.googleusercontent.com"
                  render={(renderProps)=>(
                    
                      <GoogleButton 
                      style={{
                          width: '100%'
                      }}
                      onClick={renderProps.onClick}
                      
                      label="Iniciar sesión con Google"
                      />
                      
                      
                  )}

                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy="single_host_origin"
                  
                  />



                  

                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      
                      <Button className={classes.button} onClick={switchMode}>
                        { 
                        isSignup ? 
                        'Ya tienes una cuenta? Inicia sesión' 
                        : 
                        "¿No tienes ninguna cuenta? Registrate" }
                      </Button>
                    </Grid>

                   
                  </Grid>
                  <Grid container justifyContent="center">
                    <Button  variant="contained" color="primary" onClick={handleHome} className={classes.submit}>
                          Volver a la página principal
                    </Button>
                    </Grid>
                  
                </form>
          
          </div>

      </div>
    </Container>
    </>
    )
}
