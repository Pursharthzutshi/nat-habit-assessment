"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ProductCardsInformation.module.css";
import { Product } from "@/types/types";

export default function ProductCardImageBox({ product }: { product: Product }) {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    if (!product) return null;

    const activeImage = selectedImg || product.images?.[0] || product.thumbnail;

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full md:w-1/2"
        >
            <div className="flex flex-col items-center gap-4 w-full">
                <div className={`${styles.imageContainer} flex justify-center items-center bg-gray-50`}>
                    <img
                        className={styles.mainImage}
                        src={activeImage}
                        alt={product.title}
                    />
                </div>
                {product.images && product.images.length > 1 && (
                    <div className="flex flex-wrap justify-center gap-3">
                        {product.images.map((img: string, idx: number) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedImg(img)}
                                className={`bg-white ${activeImage === img
                                    ? styles.thumbButtonActive
                                    : styles.thumbButton
                                    }`}
                            >
                                <img src={img} alt={`thumb-${idx}`} className={styles.thumbImage} />
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
