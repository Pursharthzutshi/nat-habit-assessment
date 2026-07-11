export interface Product {
    id: number | string;
    title: string;
    description: string;
    price: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category: string;
    thumbnail?: string;
    images?: string[];
    warrantyInformation?: string;
    returnPolicy?: string;
    availabilityStatus?: string;
    shippingInformation?: string;
    sku?: string;
    weight?: number;
    reviews?: any[];
}

export interface CartItem extends Product {
    quantity?: number;
}

export interface ProductCardProps {
    product: Product;
}

export interface ProductCategoriesProps {
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
    sortBy: string;
    onSelectSortBy: (sort: string) => void;
}

export interface MobileNavBarMenuProps {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
    setOpen: (open: boolean) => void;
}

export interface CartSideBarProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export interface HomePageProps {
    loading?: boolean;
    error?: string | null;
}

export interface RatingStarsProps {
    rating: number;
    showText?: boolean;
    className?: string;
}
