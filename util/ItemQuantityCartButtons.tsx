"use client";
import styles from "../HomePage.module.css";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setAddItemsToCartData, setRemoveItemsFromCartData } from "@/ReduxSlicers/CartSlicer";
import { Product } from "@/types/types";

export default function ItemQuantityCartButtons({ product }: { product: Product }) {
    if (!product) return null;

    const dispatch = useDispatch();

    const cartItems: any[] = useSelector((state: any) => state.cart?.addItemsToCartData || []);
    const itemInCart = cartItems.find((item: any) => item.id === product.id);
    const productQuantityInCart = itemInCart?.quantity || 0;

    const addItemsToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(setAddItemsToCartData(product));
    };

    const removeItemsFromCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(setRemoveItemsFromCartData(product.id));
    };

    return (
        <>
            {productQuantityInCart === 0 ? (
                <Button
                    className="addItemsToCartButton group"
                    onClick={addItemsToCart}
                >
                    <span className="text-green-100 group-hover:text-green-800 font-semibold transition-colors">Add Item To Cart</span>
                </Button>
            ) : (
                <div
                    className="flex items-center justify-center gap-4 "
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                >
                    <Button className="cartDecrementButton" onClick={removeItemsFromCart}>
                        -
                    </Button>
                    <p>{productQuantityInCart}</p>

                    <Button className="cartIncrementButton" onClick={addItemsToCart}>
                        +
                    </Button>
                </div>
            )}
        </>
    );
}
