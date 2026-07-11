"use client";
import styles from "./SearchBar.module.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchBar({ initialQuery = "" }: { initialQuery?: string }) {
    const [query, setQuery] = useState(initialQuery);
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;
        router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    };

    return (
        <form className={`${styles.searchBarForm} flex flex-row`} onSubmit={handleSearch} >
            <div className={styles.searchBarContainer}>
                <div className={styles.searchBarInputDiv}>

                    <input className={styles.searchBar}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search products..."
                    />
                </div>

                <div className={styles.searchBarButtonDiv}>
                    <button type="submit" title="Search">
                        <Search />
                    </button>

                </div>
            </div>
        </form>
    );
}