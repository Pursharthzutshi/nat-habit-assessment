"use client";
import ItemQuantityCartButtons from "@/util/ItemQuantityCartButtons";
import { Drawer, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setClearItemsFromCartData } from "@/ReduxSlicers/CartSlicer";
import { ShoppingCart, Trash2 } from "lucide-react";
import styles from "../HomePage.module.css";

export default function CartSideBar({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
    const dispatch = useDispatch();
    const cartItems: any[] = useSelector((state: any) => state.cart?.addItemsToCartData || []);

    const totalPrice = cartItems.reduce(
        (total, item) => total + (item.price || 0) * (item.quantity || 1),
        0
    );

    return (
        <Drawer
            title={
                <div className="flex items-center justify-between">
                    <p className="flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5" /> Shopping Cart
                    </p>
                    {cartItems.length > 0 && (
                        <span className="text-xs ">
                            {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
                        </span>
                    )}
                </div>
            }
            placement="right"
            onClose={() => setOpen(false)}
            open={open}
        >
            {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-3 text-gray-500">
                    <ShoppingCart />
                    <h2 >Your cart is empty</h2>
                    <p>Add items to your cart to see them here.</p>
                </div>
            ) : (
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-4 overflow-y-auto pr-1">
                        {cartItems.map((item: any) => {
                            const activeImage = item.thumbnail || item.images?.[0] || "";
                            return (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between gap-3 p-3 border border-gray-100 rounded-lg shadow-sm bg-white"
                                >
                                    <div className="flex items-center gap-3">
                                        {activeImage && (
                                            <img
                                                src={activeImage}
                                                alt={item.title || "Product image"}
                                                className={styles.cartItemImage}
                                            />
                                        )}
                                        <div className="flex flex-col">
                                            <h4> {item.title} </h4>

                                            <p className="text-xs text-gray-500">${item.price}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <ItemQuantityCartButtons product={item} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex flex-col gap-4">
                        <br></br>

                        <div>
                            <h2>Total ${totalPrice.toFixed(2)}</h2>
                        </div>
                        <div className="flex gap-2">
                            <Button className="w-full" onClick={() => setOpen(false)}> Checkout </Button>

                            <Button danger icon={<Trash2 className="w-4 h-4" />} onClick={() => dispatch(setClearItemsFromCartData(undefined))}>
                                Clear
                            </Button>
                        </div>
                    </div>
                </div>
            )
            }
        </Drawer >
    );
}

