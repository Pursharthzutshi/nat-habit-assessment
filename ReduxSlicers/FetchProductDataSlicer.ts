import { createSlice } from "@reduxjs/toolkit";

type FetchProductDataProps = {
    fetchProductData: any[];
};

const initialState: FetchProductDataProps = {
    fetchProductData: [],
};

export const FetchProductDataSlicer = createSlice({
    name: "productData",
    initialState,
    reducers: {
        setFetchproductdata: (state, action) => {
            state.fetchProductData = action.payload;
        },
        addSingleProduct: (state: any, action) => {
            const exists = state.fetchProductData.some(
                (p: any) => String(p.id) === String(action.payload.id)
            );
            if (!exists) {
                state.fetchProductData.push(action.payload);
            }
        }
    }
});

export const { setFetchproductdata, addSingleProduct } = FetchProductDataSlicer.actions;

export default FetchProductDataSlicer.reducer;