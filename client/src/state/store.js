import { create } from "zustand";
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



// const getPosts = async () => {
//     try {
//         const response = await fetch("/api/posts");
//         const data = await response.json();
//         setPosts(data);
//     } catch (error) {
//         console.error("Error fetching posts:", error);
//     }
// };