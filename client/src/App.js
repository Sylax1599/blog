import React from 'react';

import {Container} from '@material-ui/core'

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Auth } from './components/Auth/Auth';
import { PostDetails } from './components/PostDetails/PostDetails';





export const App = () => {

    const user= JSON.parse(localStorage.getItem('profile'));


    return (
        <Router>
            
                
               
                
                <Switch>
                    <Route exact  path="/auth" component={()=>(!user) ? <Auth /> : <Redirect to="/posts" />} />
                    <div>
                    <Navbar />
                    <Container maxWidth="xl"> 
                    
                    
                    <Route exact  path="/" component={()=> <Redirect to="/posts" />} />
                    <Route exact  path="/posts" component={Home} />
                    <Route exact  path="/posts/search" component={Home} />
                    <Route exact  path="/posts/:id" component={PostDetails} />
                   
                    </Container>
                    </div>
                </Switch>          
            
        </Router>
        
    )
}
