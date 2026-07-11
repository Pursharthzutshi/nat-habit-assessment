import { configureStore } from "@reduxjs/toolkit";
import fetchProductDataReducer from "@/ReduxSlicers/FetchProductDataSlicer";
import addItemsToCartReducer from "@/ReduxSlicers/CartSlicer";

export const store = configureStore({
    reducer: {
        productData: fetchProductDataReducer,
        cart: addItemsToCartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
    if (typeof window !== "undefined") {
        try {
            localStorage.setItem("nat_habit_cart", JSON.stringify(store.getState().cart));
        } catch {}
    }
});