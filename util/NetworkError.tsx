"use client";
import { WifiOff, RefreshCw } from "lucide-react";

interface NetworkErrorProps {
    message?: string;
    onRetry?: () => void;
}

export default function NetworkError({
    message = "Unable to connect to the server. Please check your internet connection and try again.",
    onRetry,
}: NetworkErrorProps) {
    return (
        <div className="flex flex-col items-center justify-center text-center max-w-xl mx-auto my-16 px-6 py-12 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
                <WifiOff className="w-8 h-8 stroke-[1.8]" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Network Error</h2>
            <p className="text-gray-600 mb-8 max-w-md">{message}</p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#004b1c] hover:bg-[#006325] text-white font-semibold rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                    <RefreshCw className="w-4 h-4" />
                    <span>Try Again</span>
                </button>
            )}
        </div>
    );
}
