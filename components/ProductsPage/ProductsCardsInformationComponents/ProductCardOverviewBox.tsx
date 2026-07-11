"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./ProductCardsInformation.module.css";
import ItemQuantityCartButtons from "@/util/ItemQuantityCartButtons";
import RatingStars from "@/util/RatingStars";
import { Product } from "@/types/types";

export default function ProductCardOverviewBox({ product }: { product: Product }) {
    if (!product) return null;


    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="w-full md:w-1/2"
        >
            <div className={`${styles.infoCard} flex flex-col gap-3`}>
                <h1 className={`${styles.title} text-gray-900`}>
                    {product.title}
                </h1>
                {product.brand && (
                    <p className={`${styles.brand} text-gray-500`}>
                        Brand: {product.brand}
                    </p>
                )}

                <RatingStars rating={product.rating ?? 0} />

                <p className={`${styles.description} text-gray-700`}>
                    {product.description}
                </p>

                <div className="flex flex-col gap-4 mt-2">
                    <p className={`${styles.statusText} text-blue-800`}>
                        Status: {product.availabilityStatus || `${product.stock} in stock`}
                    </p>
                    {product.warrantyInformation && (
                        <p className={`${styles.warrantyText} text-gray-700`}>
                            Warranty: {product.warrantyInformation}
                        </p>
                    )}
                    <p className={`${styles.discountBadge} text-green-800 `}>
                        Discount: {product.discountPercentage}% OFF
                    </p>
                    <p className={`${styles.returnPolicy} text-red-700`}>
                        {product.returnPolicy}
                    </p>
                </div>

                <ItemQuantityCartButtons product={product} />


            </div>
        </motion.div>
    );
}
