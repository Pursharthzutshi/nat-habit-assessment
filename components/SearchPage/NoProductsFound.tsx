"use client";
import Link from "next/link";
import styles from "./NoProductsFound.module.css";

interface NoProductsFoundProps {
    query: string;
}

export default function NoProductsFound({ query }: NoProductsFoundProps) {
    return (
        <div className={`flex flex-col items-center gap-5 text-center ${styles.noProductsCard}`}>
            <h3 className={styles.title}>No products found</h3>
            <p className={styles.description}>
                We couldn&apos;t find anything matching &ldquo;{query}&rdquo;. Try searching for broader terms like &ldquo;phone&rdquo;, &ldquo;beauty&rdquo;, or &ldquo;perfume&rdquo;.
            </p>
            <Link
                href="/"
                className={styles.browseButton}
            >
                Browse All Products
            </Link>
        </div>
    );
}
