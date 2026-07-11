"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Outfit } from "next/font/google";
import SearchBar from "@/util/SearchBar";
import ProductCard from "@/components/HomePage/AllProducts/AllProducts";
import styles from "@/components/HomePage/HomePage.module.css";
import Loading from "@/util/LoadingSpinner";
import ErrorMessage from "@/util/ErrorMessage";
import NoProductsFound from "@/components/SearchPage/NoProductsFound";
import { useProductQuery } from "@/hooks/useProductQuery";
import BackButton from "@/util/BackButton";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

function SearchResultsContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || searchParams.get("search") || "";
    const { products, loading, error } = useProductQuery({ search: query });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                <BackButton />
                <div className="text-center md:text-left">
                    {query ? (
                        <h1 >
                            Search Results for <span className="text-green-600">&ldquo;{query}&rdquo;</span>
                        </h1>
                    ) : (
                        <h1 className="text-center font-extrabold text-gray-900">Search Products</h1>
                    )}
                    <p className="text-sm text-center text-gray-500 mt-0.5">
                        {loading
                            ? "Searching catalog..."
                            : query
                                ? `Found ${products.length} matching ${products.length === 1 ? "product" : "products"}`
                                : "Enter a keyword above to discover products"}
                    </p>
                </div>

                <div className="w-full md:w-auto"></div>
            </div>


            {loading && <Loading message="Searching products..." />}

            {error && <ErrorMessage message={error} />}

            {!loading && !error && query && products.length === 0 && (
                <NoProductsFound query={query} />
            )}

            {!loading && !error && products.length > 0 && (
                <div className={styles.AllProductsContainer}>
                    <div className={styles.AllProductsBoxes}>
                        {products.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default function SearchPage() {
    return (
        <div className={`min-h-screen bg-gray-50/50 ${outfit.className}`}>
            <SearchBar />
            <Suspense fallback={<div className="text-center py-12 text-gray-500">Loading search...</div>}>
                <SearchResultsContent />
            </Suspense>
        </div>
    );
}
