"use client";
import HomePage from "@/components/HomePage/HomePage";
import { useEffect, useState } from "react";
import { useProducts } from "@/hooks/useProducts";

export default function Home() {
  const { products: productData, fetchCatalog } = useProducts();
  const [loading, setLoading] = useState<boolean>(!productData || productData.length === 0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCatalog() {
      if (productData && productData.length > 0) {
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        await fetchCatalog();
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load product catalog. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadCatalog();
  }, [fetchCatalog, productData.length]);

  return (
    <div>
      <HomePage loading={loading} error={error} />
    </div>
  );
}
