import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";
import { Plus } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <div className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <button
          onClick={() => add(product)}
          className="absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground shadow-md transition hover:bg-primary hover:text-primary-foreground"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{product.category}</p>
          <h3 className="mt-0.5 font-display text-lg leading-tight">{product.name}</h3>
        </div>
        <p className="whitespace-nowrap font-medium">${product.price}</p>
      </div>
    </div>
  );
}
