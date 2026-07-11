"use client";
import { useProductDetails } from "@/hooks/useProductDetails";
import styles from "../ProductMetaDataComponents.module.css";
import ProductReviewsRating from "./ProductReviewRating";
import ProductReviewCustomerInfo from "./ProductReviewCustomerInfo";
import ProductReviewTag from "./ProductReviewTag";

export default function ProductReviewsSection({ product: propProduct }: { product?: any } = {}) {
    const { product } = useProductDetails(propProduct);
    const reviews: any[] = product?.reviews || [];

    return (
        <div id="product-review-box-container">

            <ProductReviewTag product={product} />

            {reviews.length === 0 ? (
                <div className={`${styles.reviewBox} flex flex-col justify-between gap-3`}>
                    No customer reviews yet for this product.
                </div>
            ) : (
                <div className={`${styles.reviewBoxContainer} flex flex-row flex-wrap gap-5`}>
                    {reviews.map((rev, index) => (
                        <div
                            key={index}
                            className={`${styles.reviewBox} flex flex-col justify-between gap-4`}
                        >
                            <ProductReviewsRating review={rev} />
                            <ProductReviewCustomerInfo review={rev} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
