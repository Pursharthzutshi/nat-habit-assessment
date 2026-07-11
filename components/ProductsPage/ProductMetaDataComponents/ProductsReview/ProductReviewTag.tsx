"use client";
import { useProductDetails } from "@/hooks/useProductDetails";
import styles from "../ProductMetaDataComponents.module.css";

export default function ProductReviewTag({ product: propProduct }: { product?: any } = {}) {
    const { product } = useProductDetails(propProduct);
    const reviews: any[] = product?.reviews || [];

    return (
        <div id="product-review-box-container">
            <div className="pt-12">
                <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                        Customer Reviews
                    </h2>
                    <span className={styles.reviewCountBadge}>
                        {reviews.length} {reviews.length === 1 ? "Review" : "Reviews"}
                    </span>
                </div>

                {product?.rating && (
                    <div className={`${styles.reviewBoxRatingTag} flex gap-2`}>
                        <p>★ {product.rating} out of 5 overall</p>
                    </div>
                )}
            </div>
        </div>
    );
}
