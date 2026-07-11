import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Search Products",
    description: "Search across hundreds of beauty, wellness, and everyday essentials.",
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
