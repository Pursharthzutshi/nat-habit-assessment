"use client";
import styles from "../HomePage.module.css";
import { useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { MobileNavBarMenuProps } from "@/types/types";

export default function MobileNavBarMenu({
    mobileMenuOpen,
    setMobileMenuOpen,
    setOpen,
}: MobileNavBarMenuProps) {
    const cartItemQuantity = useSelector((state: any) => state.cart?.cartItemQuantity || 0);
    const router = useRouter();
    const pathname = usePathname();

    if (!mobileMenuOpen) return null;

    const handleExploreStore = () => {
        setMobileMenuOpen(false);
        if (pathname === "/") {
            const el = document.getElementById("catalog-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push("/#catalog-section");
        }
    };

    return (
        <div className="sm:hidden border-t border-gray-200 mt-2 pt-3 pb-2 flex flex-col gap-3">
            <button
                onClick={() => {
                    setMobileMenuOpen(false);
                    setOpen(true);
                }}
                className="flex items-center justify-between w-full px-3 py-2 text-left font-semibold text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
                <span>Shopping Cart</span>
                <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
                    {cartItemQuantity} {cartItemQuantity === 1 ? "item" : "items"}
                </span>
            </button>
            <div className="px-3">
                <button
                    onClick={handleExploreStore}
                    className={`${styles.SignInbutton} w-full text-center py-2`}
                >
                    Explore Store
                </button>
            </div>
        </div>
    );
}
