"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useProducts } from "@/hooks/useProducts";

export function useProductDetails(propProduct?: any) {
    const params = useParams();
    const { getProductById, fetchProductById } = useProducts();
    const reduxProduct = params?.id ? getProductById(params.id as string) : null;
    const [fetchedProduct, setFetchedProduct] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const hasReviews = (propProduct?.reviews?.length ?? 0) > 0 || (reduxProduct?.reviews?.length ?? 0) > 0;
        if (!hasReviews && params?.id) {
            setLoading(true);
            fetchProductById(params.id as string)
                .then((data) => setFetchedProduct(data))
                .catch((err) => console.error("Failed to fetch product details:", err))
                .finally(() => setLoading(false));
        }
    }, [propProduct, reduxProduct, params?.id, fetchProductById]);

    const product = fetchedProduct || propProduct || reduxProduct || null;

    return { product, loading };
}
