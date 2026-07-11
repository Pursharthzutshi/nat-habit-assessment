"use client";
import Link from "next/link";
import styles from "../HomePage.module.css";
import ProductsCardTop from "./ProductsCardTop";
import ProductsCardBottom from "./ProductsCardBottom";
import ItemQuantityCartButtons from "@/util/ItemQuantityCartButtons";
import { ProductCardProps } from "@/types/types";

export default function AllProducts({ product }: ProductCardProps) {
    if (!product) return null;

    return (
        <Link
            href={`/products/${product.id}`}
            className={`${styles.AllProductsCard} flex flex-col justify-between`}
        >
            <ProductsCardTop product={product} />
            <ProductsCardBottom product={product} />

            <ItemQuantityCartButtons product={product} />
        </Link>
    );
}
