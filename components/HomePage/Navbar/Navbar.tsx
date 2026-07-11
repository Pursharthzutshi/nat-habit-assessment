"use client";
import styles from "../HomePage.module.css";
import { Badge } from 'antd';
import { ShoppingCart, Menu, X } from 'lucide-react';
import CartSideBar from "../Cart/CartSideBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import NavbarBrand from "./NavbarBrand";
import MobileNavBarMenu from "./MobileNavBarMenu";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const cartItemQuantity = useSelector((state: any) => state.cart?.cartItemQuantity || 0);
    const router = useRouter();
    const pathname = usePathname();

    const handleExploreStore = () => {
        if (pathname === "/") {
            const el = document.getElementById("catalog-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push("/#catalog-section");
        }
    };

    return (
        <nav className={styles.NavBar}>
            <div className={styles.NavBarContainer}>
                <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
                    <NavbarBrand />

                    {/* Desktop Actions */}
                    <div className="hidden sm:flex items-center gap-5 cursor-pointer shrink-0">
                        <Badge color="green" count={cartItemQuantity}>
                            <ShoppingCart onClick={() => setOpen(true)} color="#004b1c" className={styles.cartIconButton} size={28} />
                            <CartSideBar open={open} setOpen={setOpen} />
                        </Badge>
                        <button onClick={handleExploreStore} className={styles.SignInbutton}>Explore Store</button>
                    </div>

                    {/* Mobile Hamburger & Cart */}
                    <div className="flex sm:hidden items-center gap-3 shrink-0">
                        <Badge color="green" count={cartItemQuantity}>
                            <ShoppingCart onClick={() => setOpen(true)} color="#004b1c" className={styles.cartIconButton} size={26} />
                            <CartSideBar open={open} setOpen={setOpen} />
                        </Badge>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-1.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                <MobileNavBarMenu
                    mobileMenuOpen={mobileMenuOpen}
                    setMobileMenuOpen={setMobileMenuOpen}
                    setOpen={setOpen}
                />
            </div>
        </nav>
    );
}

