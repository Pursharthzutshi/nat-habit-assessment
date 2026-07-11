"use client";
import styles from "./LoadingError.module.css";

export default function ErrorMessage({ message = "Product not found." }: { message?: string }) {
    return (
        <div className={styles.container}>
            <p className={styles.errorText}>{message}</p>
        </div>
    );
}
