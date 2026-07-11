"use client";
import styles from "../HomePage.module.css";
import { ProductCardProps } from "@/types/types";

export default function ProductsCardTop({ product }: ProductCardProps) {

    const activeImage = product.thumbnail || product.images?.[0] || "";

    return (

        <section className={styles.AllProductsCardContent}>
            <div className={styles.AllProductsCardContent}>
                <div >
                    <img className="relative"
                        src={activeImage}
                        alt={product.title || "Product image"}
                    />
                    {(product.discountPercentage ?? 0) > 0 && (
                        <span className="top-3 right-3 bg-green-100 text-green-800 text-xs font-bold px-2.5 py-1 rounded-full border border-green-200">
                            {Math.round(product.discountPercentage ?? 0)}% OFF
                        </span>
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    {product.category && (
                        <span>
                            {product.category}
                        </span>
                    )}
                    <h3> {product.title}</h3>
                </div>
            </div>
        </section>

    );
}
