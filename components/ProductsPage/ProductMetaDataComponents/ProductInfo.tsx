"use client";
import { useProductDetails } from "@/hooks/useProductDetails";
import styles from "./ProductMetaDataComponents.module.css"



export default function ProductInfo({ product: propProduct }: { product?: any } = {}) {
    const { product } = useProductDetails(propProduct);

    return (
        <div className={styles.productInfoBox}>
            <div>
                <h2>Product Information</h2>
            </div>
            <div>
                <div>
                    <p>Minimum Order: <span>{product?.minimumOrderQuantity || "N/A"} units </span></p>
                </div>
                <div>
                    <p>Shipping: <span>{product?.shippingInformation || "Standard shipping"}</span></p>
                </div>
                <div>
                    <p>Warranty: <span>{product?.warrantyInformation || "No warranty provided"}</span></p>
                </div>
                <div>
                    <p>Category: <span>{product?.category || "No category provided"}</span></p>
                </div>
                <div>
                    <p><img width={60} height={60} src={product?.meta.qrCode} alt="QR Code" /></p>
                </div>

            </div>
        </div >
    );
}
