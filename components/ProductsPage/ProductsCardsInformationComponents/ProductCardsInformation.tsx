"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useProducts } from "@/store/useProducts";
import styles from "./ProductCardsInformation.module.css";
import ProductCardImageBox from "./ProductCardImageBox";
import ProductCardOverviewBox from "./ProductCardOverviewBox";
import ProductsInformation from "@/components/ProductsPage/ProductMetaData";
import BackButton from "@/util/BackButton";
import Loading from "@/util/LoadingSpinner";
import ProductNotFound from "@/util/ProductNotFound";
import NetworkError from "@/util/NetworkError";
import AllProducts from "@/components/HomePage/AllProducts/AllProducts";
import HomePageStyles from "../../HomePage/HomePage.module.css";

export default function ProductsCardsInformation({ params }: { params: Promise<{ id: string }> }) {
    const { id } = React.use(params);
    const { products: productData, getProductById, fetchProductById } = useProducts();
    const reduxProduct = getProductById(id);

    const [product, setProduct] = useState<any>(reduxProduct || null);
    const [loading, setLoading] = useState(!reduxProduct);
    const [errorType, setErrorType] = useState<"404" | "network" | null>(null);

    const fetchProduct = useCallback(() => {
        if (reduxProduct) {
            setProduct(reduxProduct);
            setLoading(false);
            setErrorType(null);
            return;
        }

        setLoading(true);
        setErrorType(null);

        fetchProductById(id)
            .then((data) => {
                setProduct(data);
            })
            .catch((err: any) => {
                console.error("Failed to fetch product:", err);
                if (err.response && err.response.status === 404) {
                    setErrorType("404");
                } else {
                    setErrorType("network");
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id, reduxProduct, fetchProductById]);

    useEffect(() => {
        fetchProduct();
    }, [fetchProduct]);

    if (loading) {
        return <Loading message="Loading product details..." />;
    }

    if (errorType === "404" || (!product && !loading)) {
        return <ProductNotFound id={id} />;
    }

    if (errorType === "network") {
        return <NetworkError onRetry={fetchProduct} />;
    }

    return (
        <main>
            <section className="px-6 pt-6">
                <BackButton />
            </section>
            <div id="product-image" className={`${styles.mainSection} flex flex-col md:flex-row justify-center gap-10`}>
                <ProductCardImageBox product={product} />
                <ProductCardOverviewBox product={product} />
            </div>
            <section>
                <ProductsInformation product={product} />
            </section>


            <div className={`${HomePageStyles.AllProductsContainer} shadow-200`} >
                <h2 className="px-5">Check Out More Similar Products</h2>
                <div className={`${HomePageStyles.AllProductsBoxes} p-4 mt-5`}>

                    {
                        productData.filter((item: any) => item.id !== Number(id) && item.category === product.category).map((item: any) => (
                            <AllProducts key={item.id} product={item} />
                        ))}

                </div>
            </div>
        </main>
    );
}
