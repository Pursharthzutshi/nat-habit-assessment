"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useProducts } from "@/store/useProducts";
import { useParams } from "next/navigation";
import ProductReviewsSection from "./ProductMetaDataComponents/ProductsReview/ProductReviewsSection";
import ProductDimensions from "./ProductMetaDataComponents/ProductDimensions";
import ProductInfo from "./ProductMetaDataComponents/ProductInfo";
import styles from "./ProductMetaDataComponents/ProductMetaDataComponents.module.css";


export default function ProductsInformation({ product: propProduct }: { product?: any } = {}) {
    const params = useParams();
    const { getProductById } = useProducts();
    const reduxProduct = params?.id ? getProductById(params.id as string) : null;
    const [fetchedProduct, setFetchedProduct] = useState<any>(null);

    useEffect(() => {
        if (!propProduct && !reduxProduct && params?.id) {
            axios
                .get(`https://dummyjson.com/products/${params.id}`)
                .then((res) => setFetchedProduct(res.data))
                .catch((err) => console.error("Failed to fetch product metadata:", err));
        }
    }, [propProduct, reduxProduct, params?.id]);

    const product = propProduct || reduxProduct || fetchedProduct;

    return (
        <div id="product-information" className={`${styles.metaDataContainer} flex flex-col md:flex-row justify-center items-start gap-10`}>
            <div className={`${styles.metaDataCard} flex flex-col gap-8`}>
                <ProductInfo product={product} />
                <ProductDimensions product={product} />
                <ProductReviewsSection product={product} />

            </div>
        </div>
    );
}
