"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "./BackButton.module.css";

export default function BackButton() {

    return (
        <Link
            href="/"
            className={`${styles.backButton} inline-flex items-center justify-center text-gray-700`}
            title="Back to Products"
        >
            <ArrowLeft className="w-5 h-5" />
        </Link>
    );
}