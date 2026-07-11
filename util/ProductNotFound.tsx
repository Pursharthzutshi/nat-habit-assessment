"use client";
import React from "react";
import Link from "next/link";
import { PackageX } from "lucide-react";
import styles from "./ErrorStates.module.css";

export default function ProductNotFound({ id }: { id?: string }) {
    return (
        <div className={`flex flex-col items-center justify-center text-center ${styles.cardContainer}`}>
            <div className={`flex items-center justify-center ${styles.redIconBox}`}>
                <PackageX className="w-8 h-8 stroke-[1.8]" />
            </div>
            <h2 className={styles.title}>Product Not Found</h2>
            <p className={styles.description}>
                We couldn&apos;t find the product {id ? `(#${id})` : ""} you are looking for. It may have been removed, sold out, or the link is invalid.
            </p>
            <Link
                href="/"
                className={`inline-flex items-center justify-center ${styles.actionButton}`}
            >
                Browse All Products
            </Link>
        </div>
    );
}
