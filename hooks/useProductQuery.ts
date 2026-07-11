"use client";
import { useState, useEffect, useMemo } from "react";
import { useAppSelector } from "@/store/ReduxHooks";
import { useProducts } from "@/store/useProducts";

export interface UseProductQueryOptions {
    search?: string;
    id?: string | number;
    initialProduct?: any;
}

export function useProductQuery(options: UseProductQueryOptions = {}) {
    const { search, id, initialProduct } = options;

    const reduxProducts: any[] = useAppSelector((state) => state.productData.fetchProductData || []);

    const categories = useMemo(() => {
        return Array.from(new Set(reduxProducts.map((item) => item.category))).filter(Boolean);
    }, [reduxProducts]);

    const getProductById = (targetId: string | number) => {
        return reduxProducts.find((item) => String(item.id) === String(targetId));
    };

    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [singleProductData, setSingleProductData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const { searchProducts, fetchProductById } = useProducts();

    useEffect(() => {
        if (search !== undefined) {
            if (!search.trim()) {
                setSearchResults([]);
                setLoading(false);
                return;
            }
            setLoading(true);
            setError(null);
            searchProducts(search)
                .then((products) => setSearchResults(products))
                .catch((err: any) => {
                    console.error("Search query error:", err);
                    setError("Failed to fetch search results.");
                })
                .finally(() => setLoading(false));
        }
    }, [search, searchProducts]);

    useEffect(() => {
        if (id !== undefined && search === undefined) {
            const existing = initialProduct || getProductById(id);
            const hasReviews = (existing?.reviews?.length ?? 0) > 0;
            if (!hasReviews) {
                setLoading(true);
                setError(null);
                fetchProductById(id)
                    .then((data) => setSingleProductData(data))
                    .catch((err: any) => {
                        console.error("Single product fetch error:", err);
                        setError("Failed to fetch product details.");
                    })
                    .finally(() => setLoading(false));
            }
        }
    }, [id, search, initialProduct, getProductById, fetchProductById]);

    const products = search !== undefined ? searchResults : reduxProducts;
    const product =
        id !== undefined
            ? singleProductData || initialProduct || getProductById(id) || null
            : null;

    return {
        products,
        product,
        categories,
        loading,
        error,
        getProductById,
    };
}
