"use client";
import { Outfit } from "next/font/google";
import { motion } from "framer-motion";
import { useProductDetails } from "@/hooks/useProductDetails";
import styles from "./ProductMetaDataComponents.module.css"

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function ProductDimensions({ product: propProduct }: { product?: any } = {}) {
    const { product } = useProductDetails(propProduct);

    const dimensionItems = [
        { label: "Depth", value: product?.dimensions?.depth, unit: "cm" },
        { label: "Width", value: product?.dimensions?.width, unit: "cm" },
        { label: "Height", value: product?.dimensions?.height, unit: "cm" },
        { label: "Weight", value: product?.weight, unit: "g" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className={`${styles.productDimensionsBox} flex flex-col p-6 gap-4 ${outfit.className}`}
        >
            <h2 className="text-xl font-bold text-gray-900">
                Product Dimensions & Weight
            </h2>

            <div className={`${styles.productDimensionsTagsContainer} flex flex-wrap gap-4 mt-1`}>
                {dimensionItems.map((item, index) => (
                    <div key={index}>
                        <span>{item.label}: {item.value || "0"} {item.unit}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

