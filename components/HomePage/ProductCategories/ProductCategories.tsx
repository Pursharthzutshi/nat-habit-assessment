"use client";
import { Select } from "antd";
import styles from "./ProductCategories.module.css";
import { useProducts } from "@/hooks/useProducts";
import { useEffect, useState } from "react";

export interface ProductCategoriesProps {
    selectedCategory?: string;
    onSelectCategory?: (category: string) => void;
    sortBy?: string;
    onSelectSortBy?: (sort: string) => void;
}

export default function ProductCategories({
    selectedCategory = "All",
    onSelectCategory,
    sortBy = "default",
    onSelectSortBy,
}: ProductCategoriesProps) {
    const { categories: uniqueCategories } = useProducts();
    const allCategories = ["All", ...uniqueCategories];

    return (
        <section className="max-w-[80rem] mx-auto mt-4 px-3 sm:px-6 md:px-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {allCategories.map((category: string, index: number) => {
                    const isActive = selectedCategory === category;
                    return (
                        <button
                            key={index}
                            onClick={() => onSelectCategory?.(category)}
                            className={isActive ? styles.categoryButtonActive : styles.categoryButton}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
            <div className="w-full sm:w-auto flex justify-start sm:justify-end">
                <Select
                    value={sortBy}
                    className="w-full sm:!w-[180px]"
                    onChange={(value) => onSelectSortBy?.(value)}
                    options={[
                        { value: "default", label: "Default Sort" },
                        { value: "price-asc", label: "Price: Low to High" },
                        { value: "price-desc", label: "Price: High to Low" },
                        { value: "rating-desc", label: "Highest Rated" },
                    ]}
                />
            </div>
        </section>
    );
}
