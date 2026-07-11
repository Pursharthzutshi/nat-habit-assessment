"use client";
import { useProducts } from "@/store/useProducts";
import { Carousel } from "antd";
import styles from "./FeaturedProducts.module.css";
import FeaturedProductSlide from "./FeaturedProductSlide";

export default function FeaturedProducts() {
    const { products } = useProducts();

    const featuredList = products.slice(0, 6);

    if (featuredList.length === 0) return null;

    return (
        <section className={styles.featuredContainer}>
            <h2 className={styles.featuredTitle}>
                Featured Products
            </h2>

            <Carousel
                className={styles.featuredCarousel}
                autoplay
                slidesToShow={4}
                responsive={[
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ]}
            >
                {featuredList.map((p) => (
                    <div key={p.id}>
                        <FeaturedProductSlide product={p} />
                    </div>
                ))}
            </Carousel>
        </section>
    );
}

