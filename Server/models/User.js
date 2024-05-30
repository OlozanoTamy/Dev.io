import sql from "../utils/sql.js";

export const createUser = async (username, email, password) => {
    try {
        const response = await sql`INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${password}) RETURNING *`;
        console.log('User inserted:', response);
        return response;
    } catch (error) {
        console.log(error)
    }
}


export const findUserByEmail = async (email) => {
    try {
        console.log(email)
        const result = await sql`SELECT * FROM users WHERE email = ${email}`;
        return result[0]
    } catch (error) {
        console.log(error)
    }
};

