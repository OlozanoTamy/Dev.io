import bcrypt from 'bcrypt';
import { createUser, findUserByEmail } from "../models/User.js";
//Se debe instalar la dependencias JWT json web token
import jwt from "jsonwebtoken";
//Sirve para tokenizar la infon



//Sirve para solicitar las variables de entorno
import 'dotenv/config'

//recibe la data desde api/data para hassear la contraseña y la guarda en la base de datos metiate la funcion createUser
export const register = async (req, res) => {
    const { username, email, password } = req.body;
    console.log(username, email, password)
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await createUser(username, email, hashedPassword);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


//Se usa despues de que la llamada a la ruta de post api/auth/login y retorna un token
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await findUserByEmail(email);
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};