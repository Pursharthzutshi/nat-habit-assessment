"use client";
import { RatingStarsProps } from "@/types/types";

export default function RatingStars({ rating = 0, showText = true, className = "" }: RatingStarsProps) {
    const roundedRating = Math.round(rating || 0);
    const filledStars = Math.max(0, Math.min(5, roundedRating));
    const emptyStars = Math.max(0, 5 - filledStars);

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <span className="text-amber-500 font-bold tracking-wider">
                {"★".repeat(filledStars)}
                <span className="text-gray-300">{"☆".repeat(emptyStars)}</span>
            </span>
            {showText && (
                <span className="text-sm font-medium text-gray-600">
                    ({Number(rating || 0).toFixed(1)} rating)
                </span>
            )}
        </div>
    );
}
