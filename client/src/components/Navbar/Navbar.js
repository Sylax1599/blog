import React, { useState, useEffect } from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom'
import {AppBar, Typography, Box, Avatar, Button, Toolbar} from '@material-ui/core';
import useStyles from './styles';
import decode from 'jwt-decode';
import memories from '../../images/logo.png';
import { useDispatch } from 'react-redux';
import logo from '../../images/logo.png';

export const Navbar = () => {

    const classes= useStyles();

    const dispatch = useDispatch();

    const history=useHistory();

    const location=useLocation();


    const [user, setUser] = useState(
      JSON.parse(localStorage.getItem('profile'))
    )



    useEffect(() => {
      const token= user?.token;
      if(token){
        const decodeToken= decode(token);
        if(decodeToken.exp *1000 < new Date().getTime())
        logout()
      }
      setUser( JSON.parse(localStorage.getItem('profile')));

    }, [location])

    const logout=()=>{
        const action={
          type: 'LOGOUT'
        }
        dispatch(action);
        history.push('/');
        setUser(null);

    }

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography component={Link} to="/" className={classes.heading} align="center">ReactBlog</Typography>
          <img className={classes.image} src={logo} alt="icon" height="60px" />
        </div>
      
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
            <>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            
          <div className={classes.profile}>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
          </div>
          <Button variant="contained" className={classes.logout} onClick={logout}>Cerrar sesión</Button>

          </>
        ) : (
          <Button component={Link} className={classes.logout} to="/auth" variant="contained">Iniciar sesión</Button>
        )}
      </Toolbar>
    </AppBar>
       
    )
}
