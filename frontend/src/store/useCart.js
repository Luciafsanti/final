import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCart = create(persist((set) => ({
    items: {}, total: 0,
    addItem: (book) => set((state) => {
        const items = { ...state.items };
        if (items[book.book_id]) {
            items[book.book_id].quantity += 1;
        } else {
            items[book.book_id] = { ...book, quantity: 1 };
        }
        return { items };
    }), deleteItem: (book_id) => set((state) => {
        const items = { ...state.items };
        delete items[book_id];
        return { items };
    }),
    changeQuantity: (book_id, newQuantity) => set((state) => {
        const items = { ...state.items };
        items[book_id].quantity = newQuantity
        return { items };
    }),
    setTotalPrice: (total_price) => set((state) => {
        let total = 0;
        total = total_price;
        return { total };
    }),
}), {
    name: "cartStorage",
    getStorage: () => localStorage,
    setStorage: (state) => localStorage.setItem("cartStorage", JSON.stringify(state))
}));

export default useCart;