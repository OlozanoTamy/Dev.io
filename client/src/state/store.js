import { create } from "zustand";
import axios from 'axios';
const useStore = create((set) => ({
    data: [],
    isLoading: false,
    error: null,
    fetchData: async () => {
        try {
            set({ isLoading: true });
            const response = await fetch("/api/posts");
            const data = await response.json();
            set({ data, isLoading: false });
        } catch (error) {
            set({ error, isLoading: false });
        }
    },
}));

export default useStore;

// const useStore = create((set) => ({
//     user: null,
//     token: localStorage.getItem('token') || null,
//     posts: [],
//     isLoading: false,
//     error: null,
//     fetchPosts: async () => {
//         set({ isLoading: true });
//         try {
//             const response = await axios.get('/api/posts', {
//                 headers: {
//                     'Authorization': `Bearer ${localStorage.getItem('token')}`
//                 }
//             });
//             set({ posts: response.data, isLoading: false });
//         } catch (error) {
//             set({ error: error.message, isLoading: false });
//         }
//     },
//     login: async (email, password) => {
//         set({ isLoading: true });
//         try {
//             const response = await axios.post('/api/login', { email, password });
//             localStorage.setItem('token', response.data.token);
//             set({ token: response.data.token, user: response.data.user, isLoading: false });
//         } catch (error) {
//             set({ error: error.message, isLoading: false });
//         }
//     },
//     logout: () => {
//         localStorage.removeItem('token');
//         set({ token: null, user: null });
//     }
// }));

// export default useStore;

