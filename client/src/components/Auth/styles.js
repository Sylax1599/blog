import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    
    background: 'transparent',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 2,
    color: 'white',
    height: 42,
    padding: '0 20px',
    fontFamily: "Montserrat",
    '&:hover':{
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',

    }
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  blur:{
    marginTop: '20%',
    marginBottom: '10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    margin: '0px auto',
    background: 'rgba(50, 50, 50, 0.20)',
    //background: 'rgba(255, 255, 255, 0.35)',
    backdropFilter: 'blur(10px) saturate(177%)',
    borderRadius: '1rem',
    
    boxShadow: '0 2px 5px 0 rgba(22, 22, 22, 0.15)',
    border: '1px solid rgba( 255, 255, 255, 0.18 )'

},
title:{
  
    color: '#fff',
    fontSize: '30px',
    fontFamily: "Montserrat",
    fontWeight: '400',
    letterSpacing: '-1.8px',
    lineHeight: '46px',
    textShadow: '0 2px 4px rgb(71 97 206 / 36%)',
    position: 'relative',
    top: '4px'
},
button:{
    color: '#fff',
    fontSize: '12px',
    fontFamily: "Montserrat",
},

input: {
  
  background: 'rgba(80, 80, 80, 0.20)',
  '& .MuiInputLabel-outlined':{
    color: 'rgba( 255, 255, 255, 0.25 )',
    fontSize: '15px',
    fontFamily: "Montserrat",
    
  },
  '& label.Mui-focused': {
    color: 'rgba( 255, 255, 255, 0.25 )',
    
  },

  '& .MuiOutlinedInput-input':{
    color:'rgba( 255, 255, 255, 0.90 )',
  },
  
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba( 255, 255, 255, 0.18 )',
      
    },
    '&:hover fieldset': {
      borderColor: 'rgba( 255, 255, 255, 0.50 )',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba( 10, 10, 10, 0.40 )',
      background: 'rgba(0, 0, 0, 0.25)',
    },
  },


  
},


}));