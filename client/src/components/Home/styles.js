import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    backgroundColor: '#212121'
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
    background: '#212121',
    color: '#fff',
    boxShadow: '0px 3px 5px -1px rgb(75 75 75 / 20%), 0px 6px 10px 0px rgb(149 149 149 / 14%), 0px 1px 18px 0px rgb(29 29 29 / 12%) !important'
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      
    },
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