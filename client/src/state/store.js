import { create } from 'zustand'
//Se esta usadon zustand como manejador global de eventos
const useStore = create((set) => ({
    //retorna un Objeto que viene seteado con los datos
    data: [],
    isLoading: false,
    error: null,
    fetchData: async () => {
        try {
            set({ isLoading: true })
            const response = await fetch("/api/posts");
            const data = await response.json();
            set({ data: data, isLoading: false })
        } catch (error) {
            set({ error, isLoading: false })
        }
    },
}))


export default useStore;