import { createSlice } from "@reduxjs/toolkit";

type CartSlicerProps = {
    addItemsToCartData: any[];
    cartItemQuantity: number;
    removeItemsFromCartData: any[];
    clearItemsFromCartData: any[];
}

const initialState: CartSlicerProps = {
    addItemsToCartData: [],
    cartItemQuantity: 0,
    removeItemsFromCartData: [],
    clearItemsFromCartData: [],
}

export const CartSlicer = createSlice({
    name: "AddItemsToCartData",
    initialState,
    reducers: {
        setAddItemsToCartData: (state, action) => {
            const existingItem = state.addItemsToCartData.find((item) => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.addItemsToCartData.push({ ...action.payload, quantity: 1 });
            }
            state.cartItemQuantity += 1;
        },
        setRemoveItemsFromCartData: (state, action) => {
            const idToRemove = typeof action.payload === "object" ? action.payload.id : action.payload;
            const existingItem = state.addItemsToCartData.find((item) => item.id === idToRemove);

            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                state.addItemsToCartData = state.addItemsToCartData.filter((item) => item.id !== idToRemove);
            }
            state.cartItemQuantity = Math.max(0, state.cartItemQuantity - 1);
        },

        setClearItemsFromCartData: (state, action) => {
            state.addItemsToCartData = [];
            state.cartItemQuantity = 0;
        },
    },
});

export const { setAddItemsToCartData, setRemoveItemsFromCartData, setClearItemsFromCartData } = CartSlicer.actions;

export default CartSlicer.reducer;