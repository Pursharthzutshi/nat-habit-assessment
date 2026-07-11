"use client";
import styles from "./LoadingError.module.css";

export default function Loading({ message = "Loading product details..." }: { message?: string }) {
    return (
        <div className={styles.container}>
            <div className={styles.spinner} />
            <p className={styles.loadingText}>{message}</p>
        </div>
    );
}
