import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import styles from "./NavbarBrand.module.css";

export default function NavbarBrand() {
    return (
        <div className={styles.brandContainer}>
            <Link href="/" className={styles.brandLink}>
                <ShoppingBag strokeWidth={2.2} className={styles.brandIcon} />
                <h2 className={styles.brandTitle}>
                    E Commerce
                </h2>
            </Link>
        </div>
    );
}
