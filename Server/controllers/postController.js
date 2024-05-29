import { createPost, getRecentPost, getUserPosts } from "../models/Post.js";

export const addPost = async (req, res) => {
    const { title, content } = req.body
    const userId = req.userId
    try {
        const post = await createPost(userId, title, content);
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const fetchRecentPosts = async (req, res) => {
    try {
        const posts = await getRecentPost();
        res.json(posts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const fetchUserPosts = async (req, res) => {
    const userId = req.params.userId;
    try {
        const posts = await getUserPosts(userId);
        res.json(posts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}