import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',
    
  },
  card: {
    display: 'flex',
    width: '100%',
    
    background: 'rgba(40, 40, 40, 0.20)',
    //background: 'rgba(255, 255, 255, 0.35)',
    backdropFilter: 'blur(10px) saturate(177%)',
    borderRadius: '1rem',
    
    boxShadow: '0 2px 5px 0 rgba(22, 22, 22, 0.15)',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',

    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
    padding: '10px 30px',
    
  },
  imageSection: {
    width: '40vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    margin: '0 20px',
    [theme.breakpoints.down('sm')]: {
      
      display: 'flex',
      alignSelf: 'center',
      width: '70%',
      margin: '10px 20px',
    },

    
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },

  commentsOuterContainer:{
    display: 'flex',
    justifyContent:'space-between',

  },
  commentsInnerContainer:{
    height:'200px',
    overflowY: 'auto',
    marginRight:'30px'
  },
  title:{
    color: 'rgba( 240, 240, 240, 0.90)',
    fontSize: '50px',
    fontFamily: "Montserrat",
    fontWeight: '400',
    letterSpacing: '-1.8px',
    textShadow: '0 4px 8px rgba( 200, 200, 200, 0.18 )',
  },
  tags:{
    color: 'rgba( 200, 200, 200, 0.50)',
    fontSize: '20px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '500',
    letterSpacing: '1.2px',
    textShadow: '0 4px 8px rgba( 200, 200, 200, 0.18 )',
  },
  message:{
    color: 'rgb( 180, 180, 180)',
    fontSize: '17px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '500',
    textShadow: '0 2px 4px rgba( 20, 20, 20, 0.70 )',

  },
  createdBy:{
    color: 'rgba( 240, 240, 240, 0.90)',
    fontSize: '20px',
    fontFamily: "Montserrat",
    fontWeight: '400',
    letterSpacing: '1px',
    textShadow: '0 4px 8px rgba( 200, 200, 200, 0.18 )',
    marginTop: '20px'
  },
  date:{
    color: 'rgba( 200, 200, 200, 0.50)',
    fontSize: '15px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '500',
    letterSpacing: '1.2px',
    textShadow: '0 4px 8px rgba( 200, 200, 200, 0.18 )',
    marginTop: '5px'
  },
  postRecommendedStyle:{
    padding: '10px 20px',
    background: 'rgba(60, 60, 60, 0.20)',
    //background: 'rgba(255, 255, 255, 0.35)',
    backdropFilter: 'blur(10px) saturate(177%)',
    borderRadius: '1rem',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
    color: 'rgba( 240, 240, 240, 0.90)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleRecommended:{
    fontSize: '20px',
    fontFamily: 'Montserrat',
    
  },
  createdByRecommended:{
    color: 'rgba( 240, 240, 240, 0.90)',
    fontSize: '16px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    letterSpacing: '2px',
  },
  foto:{
    width: '200px',
    alignSelf: 'center',
  },
  commentSection:{
    color: 'rgba( 240, 240, 240, 0.90)',
    fontSize: '16px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    letterSpacing: '2px',
  },
  comment:{
    color: 'rgba( 240, 240, 240, 0.90)',
    fontSize: '12px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

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
  commentButton:{
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
  }
  
}));