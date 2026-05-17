import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Search } from "lucide-react";

export const Route = createFileRoute("/products")({
  component: Products,
  head: () => ({
    meta: [
      { title: "Shop all products — ShopEase" },
      { name: "description", content: "Browse the full ShopEase catalog across apparel, accessories, audio and home." },
    ],
  }),
});

function Products() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
  const list = useMemo(
    () => products.filter((p) =>
      (cat === "All" || p.category === cat) &&
      (q === "" || p.name.toLowerCase().includes(q.toLowerCase()))
    ),
    [q, cat]
  );

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Catalog</p>
          <h1 className="mt-2 font-display text-5xl">All products</h1>
        </div>
        <div className="relative w-full max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products…"
            className="h-11 w-full rounded-full border border-border bg-card pl-10 pr-4 text-sm outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              cat === c ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >{c}</button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
      {list.length === 0 && (
        <p className="mt-20 text-center text-muted-foreground">No products match your search.</p>
      )}
    </section>
  );
}
