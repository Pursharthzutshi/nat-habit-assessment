"use client";
import React from "react";
import Link from "next/link";
import styles from "./FeaturedProducts.module.css";
import { ProductCardProps } from "@/types/types";

export default function FeaturedProductSlide({ product }: ProductCardProps) {
    if (!product) return null;

    return (
        <Link href={`/products/${product.id}`} className={styles.carouselSlide}>
            <div className={styles.carouselImageWrapper}>
                <img
                    src={product.thumbnail || product.images?.[0] || ""}
                    alt={product.title}
                    className={styles.carouselImage}
                />
                {(product.discountPercentage ?? 0) > 0 && (
                    <span className={styles.carouselDiscountBadge}>
                        {Math.round(product.discountPercentage ?? 0)}% OFF
                    </span>
                )}
            </div>
            <div className={styles.carouselInfo}>
                {product.category && (
                    <span className={styles.carouselCategory}>{product.category}</span>
                )}
                <h3 className={styles.carouselProductTitle}>{product.title}</h3>
                <p className={styles.carouselPrice}>${product.price}</p>
            </div>
        </Link>
    );
}
