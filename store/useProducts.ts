"use client";
import { useCallback, useMemo } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/store/ReduxHooks";
import { setFetchproductdata, addSingleProduct } from "@/ReduxSlicers/FetchProductDataSlicer";
import { Product } from "@/types/types";

export function useProducts() {
    const dispatch = useAppDispatch();
    const products: Product[] = useAppSelector((state) => state.productData.fetchProductData || []);

    const categories = useMemo(() => {
        return Array.from(new Set(products.map((item) => item.category))).filter(Boolean);
    }, [products]);

    const getProductById = useCallback(
        (id: string | number) => {
            return products.find((item) => String(item.id) === String(id));
        },
        [products]
    );

    const getProductsByCategory = useCallback(
        (category: string) => {
            return products.filter((item) => item.category === category);
        },
        [products]
    );

    const fetchCatalog = useCallback(async () => {
        if (products && products.length > 0) {
            return products;
        }
        const res = await axios.get("https://dummyjson.com/products");
        dispatch(setFetchproductdata(res.data.products));
        return res.data.products;
    }, [products, dispatch]);

    const fetchProductById = useCallback(
        async (id: string | number) => {
            const cached = getProductById(id);
            if (cached) return cached;

            const res = await axios.get(`https://dummyjson.com/products/${id}`);
            dispatch(addSingleProduct(res.data));
            return res.data;
        },
        [getProductById, dispatch]
    );

    const searchProducts = useCallback(async (query: string) => {
        if (!query.trim()) return [];
        const res = await axios.get(
            `https://dummyjson.com/products/search?q=${encodeURIComponent(query.trim())}`
        );
        return res.data.products || [];
    }, []);

    return {
        products,
        categories,
        getProductById,
        getProductsByCategory,
        fetchCatalog,
        fetchProductById,
        searchProducts,
    };
}
