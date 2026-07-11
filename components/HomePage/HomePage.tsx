"use client";

import { useEffect, useState } from "react";
import { useProducts } from "@/store/useProducts";
import { motion } from "framer-motion";
import ProductCategories from "./ProductCategories/ProductCategories";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import SearchBar from "@/util/SearchBar";
import AllProducts from "@/components/HomePage/AllProducts/AllProducts";
import styles from "./HomePage.module.css";
import Loading from "@/util/LoadingSpinner";
import ErrorMessage from "@/util/ErrorMessage";
import { Pagination } from "antd";

export interface HomePageProps {
    loading?: boolean;
    error?: string | null;
}

export default function HomePage({ loading, error }: HomePageProps) {
    const { products: productData } = useProducts();
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [sortBy, setSortBy] = useState<string>("default");
    const [currentPage, setCurrentPage] = useState(1);


    const pageSize = 12;

    const filteredProducts = (
        selectedCategory === "All"
            ? [...productData]
            : productData.filter((item: any) => item.category === selectedCategory)
    ).sort((a: any, b: any) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating-desc") return b.rating - a.rating;
        return 0;
    });

    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, sortBy]);

    return (
        <main>
            <SearchBar />

            {loading && <Loading message="Loading product catalog..." />}
            {error && <ErrorMessage message={error} />}

            {!loading && !error && (
                <>
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <FeaturedProducts />
                    </motion.div>

                    <motion.div
                        id="catalog-section"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    >
                        <ProductCategories
                            selectedCategory={selectedCategory}
                            onSelectCategory={setSelectedCategory}
                            sortBy={sortBy}
                            onSelectSortBy={setSortBy}
                        />
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className={styles.AllProductsContainer}
                    >
                        <div className={styles.AllProductsBoxes}>
                            {paginatedProducts.map((item: any) => (
                                <AllProducts key={item.id} product={item} />
                            ))}
                        </div>
                    </motion.div>

                    {filteredProducts.length > pageSize && (
                        <div className="flex justify-center my-8">
                            <Pagination
                                current={currentPage}
                                pageSize={pageSize}
                                total={filteredProducts.length}
                                onChange={(page) => {
                                    setCurrentPage(page);
                                    window.scrollTo({ top: 400, behavior: "smooth" });
                                }}
                            />
                        </div>
                    )}

                </>
            )}
        </main>
    );
}
