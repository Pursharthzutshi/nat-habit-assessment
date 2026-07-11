import { Outfit } from "next/font/google";
import ProductsCardsInformation from "@/components/ProductsPage/ProductsCardsInformationComponents/ProductCardsInformation";
import { Metadata } from "next";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {

    const { id } = await params;

    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`)

        const product = await res.json();

        return {
            title: product.title,
            description: product.description,
            openGraph: {
                title: product.title,
                description: product.description,
                images: [product.thumbnail],
            },
        }
    } catch {
        return {
            title: "Product Details"
        }
    }
}

export default function Products({ params }: { params: Promise<{ id: string }> }) {
    return (
        <div className={outfit.className}>
            <ProductsCardsInformation params={params} />
        </div>
    );
}
