"use client";
import React from "react";
import { useProducts } from "@/hooks/useProducts";

interface ProductIteratorProps {
    /** Optional filter function to filter products before iterating */
    filter?: (product: any, index: number) => boolean;
    /** Optional limit for the number of items to display */
    limit?: number;
    /** Render prop function to render each product item */
    renderItem: (product: any, index: number) => React.ReactNode;
    /** Optional fallback content if no products match */
    emptyFallback?: React.ReactNode;
    /** Optional wrapper className */
    className?: string;
}

export default function ProductIterator({
    filter,
    limit,
    renderItem,
    emptyFallback = null,
    className,
}: ProductIteratorProps) {
    const { products } = useProducts();

    let filteredProducts = filter ? products.filter(filter) : products;

    if (limit && limit > 0) {
        filteredProducts = filteredProducts.slice(0, limit);
    }

    if (!filteredProducts || filteredProducts.length === 0) {
        return <>{emptyFallback}</>;
    }

    return (
        <div className={className}>
            {filteredProducts.map((product, index) => renderItem(product, index))}
        </div>
    );
}
