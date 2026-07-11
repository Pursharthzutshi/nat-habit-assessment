"use client";
import styles from "../ProductMetaDataComponents.module.css";
import { formatDate } from "@/util/formatDate";

export default function ProductReviewsRating({ review }: { review: any }) {
    const ratingCount = Math.min(5, Math.max(0, Math.round(review?.rating || 5)));
    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400 text-lg">
                    {"★".repeat(ratingCount)}
                    <span className={styles.emptyStars}>
                        {"★".repeat(5 - ratingCount)}
                    </span>
                </div>
                <span className="text-sm text-gray-500">{formatDate(review?.date)}</span>
            </div>

            <p className="text-gray-700 leading-relaxed">&ldquo;{review?.comment}&rdquo;</p>
        </div>
    );
}
