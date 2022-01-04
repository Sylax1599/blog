import express from 'express';
import { signIn, signUp} from '../controllers/users.js';


const router= express.Router();

//localhost:500/users

router.post('/signin', signIn)
router.post('/signup', signUp)

export default router;