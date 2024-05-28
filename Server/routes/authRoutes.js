import { Router } from 'express';
import { register, login } from '../controllers/authController.js';

const router = Router();
//Dependiendo de si la la solicitud se da desde register o login  y las redirige a las con las funciones asociadas
router.post('/register', register);
router.post('/login', login);

export default router;
