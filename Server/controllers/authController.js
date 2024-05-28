import bcrypt from 'bcrypt';
import { createUser } from "../models/User.js";


//recibe la data desde api/data para hassear la contraseña y la guarda en la base de datos metiate la funcion createUser
export const register = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await createUser(username, email, hashedPassword);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};