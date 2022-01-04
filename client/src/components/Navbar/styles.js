import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor:'#212121'
  },
  heading: {
    fontSize: '30px',
    fontWeight: '500',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',    
    background: 'linear-gradient(45deg, #00abff, #1c3cff)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    letterSpacing: '1.2px !important',
    
  },
  image: {
    fill: '10%'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '30vw',
  },
  userName: {
    color:'#9e9e9e',
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    marginRight: '10px'
  },

  logout:{
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 2,
    color: 'white',
    height: 42,
    width: '40%',
    textAlign: 'center',
    flex: 'none'
  },

  ["@media (min-width:1000px)"]:{
    width: '90%',
  },
  
  ["@media (max-width:540px)"]:{
    heading:{
      display: 'none'
    },
    logout:{
      fontSize: '12px',
      width: '60%',
      marginTop: '10px'
    },
    profile: {
      display: 'flex',
      
      width: '25vw',
    }
  },

  ["@media (max-width:700px)"]:{
    
    logout:{
      width: '40%',
      display: 'flex',
      marginTop: '10px'
    },
    heading:{
      fontSize: '20px'
    }
    
  }


}));