"use client";
import Avatar from 'react-avatar';

export default function ProductReviewCustomerInfo({ review }: { review: any }) {
    return (
        <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
            <Avatar
                name={review?.reviewerName || "Anonymous"}
                size="36"
                round={true}
                fgColor="#ffffff"
                textSizeRatio={1.75}
            />
            <div className="flex flex-col">
                <span className="font-medium text-gray-900 text-sm">
                    {review?.reviewerName || "Anonymous"}
                </span>
                {review?.reviewerEmail && (
                    <span className="text-xs text-gray-500">
                        {review.reviewerEmail}
                    </span>
                )}
            </div>
        </div>
    );
}
