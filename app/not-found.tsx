import React from "react";
import Link from "next/link";
import { Compass } from "lucide-react";
import styles from "@/util/ErrorStates.module.css";

export default function NotFound() {
    return (
        <div className={`flex flex-col items-center justify-center text-center ${styles.pageContainer}`}>
            <div className={`flex items-center justify-center ${styles.greenIconBox}`}>
                <Compass className="w-10 h-10 stroke-[1.8]" />
            </div>
            <h1 className={styles.largeTitle}>Page Not Found (404)</h1>
            <p className={styles.description}>
                Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <Link
                href="/"
                className={`inline-flex items-center justify-center ${styles.actionButton}`}
            >
                Return to Homepage
            </Link>
        </div>
    );
}
