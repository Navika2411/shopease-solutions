import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Truck, ShieldCheck, RefreshCcw } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "ShopEase — Shop everyday essentials" },
      { name: "description", content: "Discover curated products, manage your cart, and check out securely on ShopEase." },
    ],
  }),
});

function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> New season, new arrivals
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-7xl">
            Shop the <em className="font-normal italic text-primary">essentials</em>,<br />
            with ease.
          </h1>
          <p className="mt-5 max-w-md text-base text-muted-foreground">
            ShopEase brings together carefully curated products, a frictionless cart, and reliable delivery — all in one streamlined storefront.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90">
              Browse the shop <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="inline-flex h-12 items-center rounded-full border border-border px-6 text-sm font-medium transition hover:bg-secondary">
              Our story
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
            <img src={heroImg} alt="Curated products" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-lg md:block">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Free shipping</p>
            <p className="mt-1 font-display text-xl">On orders over $75</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-3">
          {[
            { icon: Truck, title: "Fast delivery", desc: "2–4 day shipping on every order." },
            { icon: ShieldCheck, title: "Secure checkout", desc: "Encrypted payments you can trust." },
            { icon: RefreshCcw, title: "Easy returns", desc: "30-day no-questions-asked policy." },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <f.icon className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">{f.title}</p>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Featured</p>
            <h2 className="mt-2 font-display text-4xl">This week's picks</h2>
          </div>
          <Link to="/products" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline-flex">View all →</Link>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {products.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </>
  );
}
