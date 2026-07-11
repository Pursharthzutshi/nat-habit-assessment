"use client";
import { ProductCardProps } from "@/types/types";

export default function ProductsCardBottom({ product }: ProductCardProps) {

    return (

        <section className="flex items-center justify-between pt-4 mt-3 border-t border-gray-100">
            <h2>${product.price}</h2>
            <div className="flex items-center gap-1 text-sm">
                <span className="text-yellow-500">★</span>
                <span>
                    {product.rating ? Number(product.rating).toFixed(1) : "4.0"}
                </span>
            </div>
        </section>
    );
}
