import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLogin = create(persist((set) => ({
    username: "", user_id: "", acces_type: "",
    login: (username, user_id, acces_type) => set({ username, user_id, acces_type }),
    logout: () => set({ username: "", user_id: "", acces_type: "" }),
}), {
    name: "loginStorage",
    getStorage: () => localStorage
}));

export default useLogin;