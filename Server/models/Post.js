import sql from "../utils/sql.js"

//sirve para crear un post en la base posterior al llamado por parte del front
export const createPost = async (userId, title, content) => {
    try {
        const result = await sql`INSERT INTO posts (user_id, title, content) VALUES (${userId}, ${title}, ${content}) RETURNING *`
        return result
    } catch (error) {
        console.log(error)
    }
}

export const getRecentPost = async () => {
    try {
        const result = await sql`SELECT * FROM posts ORDER BY created_at DESC LIMIT 10`
        return result
    } catch (error) {
        console.log(error)
    }
}

export const getUserPosts = async (userId) => {
    try {
        const result = await sql`SELECT * FROM posts WHERE user_id =${userId} ORDER BY created_at DESC'`
        return result
    } catch (error) {
        console.log(error)
    }
}