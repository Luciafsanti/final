import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCart = create(persist((set) => ({
    items: {}, total: 0, shippingCost: 0, shippingAdress: "", shippingZIP: 0,
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
    setShippingCost: (cost) => set((state) => {
        let shippingCost = 0;
        shippingCost = cost;
        return { shippingCost };
    })
    ,
    setTotalPrice: (total_price) => set((state) => {
        let total = 0;
        total = total_price;
        return { total };
    }),
    cleanCart: () => set({ items: {}, total: 0 }),
    setAdress: (adress) => set((state) => {
        let shippingAdress = adress;
        console.log(shippingAdress);
        return { shippingAdress };
    }),
    setZIP: (ZIP) => set((state) => {
        let shippingZIP = ZIP;
        console.log(shippingZIP);
        return { shippingZIP };
    })
}), {
    name: "cartStorage",
    getStorage: () => localStorage,
    setStorage: (state) => localStorage.setItem("cartStorage", JSON.stringify(state))
}));

export default useCart;