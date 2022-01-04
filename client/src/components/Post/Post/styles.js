import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) =>({
  
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    height: '100%',
    position: 'relative',
    background: '#10151887',
    //background: 'rgba(255, 255, 255, 0.35)',
    border: '1px solid rgba( 100, 100, 100, 0.23 )',

  },
  
  
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: '#2196f3',
  },

  headerTitle:{
    color: 'rgba( 255, 255, 255, 0.90 )',
  },
  subheader:{
    color: 'rgba( 255, 255, 255, 0.70 )',

  },
  tag:{
    fontSize: '0.875rem !important',
    color: 'rgba( 255, 255, 255, 0.70 )'
  },
  title:{
    color: 'rgba( 255, 255, 255, 0.90 )',
    fontSize: '1.7rem'
  },
  body:{
    fontSize: '1rem !important',
    color: 'rgba( 150, 150, 150, 0.70 )'

  },
  delete:{
    color: 'rgba( 255, 255, 255, 0.90 )',

  },
  like:{
    color: 'rgba( 255, 255, 255, 0.90 )',

  }

}));