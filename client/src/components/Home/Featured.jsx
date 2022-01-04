import { Paper,Typography, Button } from '@material-ui/core'
import React from 'react';

import  './styles.css';

export const Featured = () => {
    return (
        <Paper elevation={3}>
        <div style={{backgroundImage: `url('https://images7.alphacoders.com/116/thumb-1920-1162253.jpg')`}} className="hero">

            <div className="blur">

                <Typography style={{margin: '10px 10px'}} className="title" >
                    Bienvenido
                </Typography>
                


                <div className="content">
                    Blog hecho con React JS + Redux + MaterialUI  :) 

                    <br/>
                    <br/>
                    <p>
                        Lorem ipsum dolor sit amet. Quo maxime odit fuga totam ad dolorum, veritatis quis eveniet laborum, obcaecati deleniti mollitia natus in harum. Architecto est autem voluptate quidem?
                        </p>
                </div>

                <div className="button">
                    <Button style={{
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    border: 0,
                    borderRadius: '3px',
                    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                    color: '#fff',
                    margin: '10px 10px',
                    width: '40%'
                    }} 
                    variant="contained">
                        VER
                    </Button>
                </div>

            </div>

        </div>
        </Paper>
    )
}
