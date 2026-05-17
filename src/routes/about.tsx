import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About ShopEase — Our story" },
      { name: "description", content: "ShopEase is built to make online shopping simple for customers and merchants alike." },
    ],
  }),
});

function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">About</p>
      <h1 className="mt-2 font-display text-5xl">A simpler way to shop online.</h1>
      <div className="prose prose-neutral mt-8 max-w-none space-y-5 text-base text-muted-foreground">
        <p>
          ShopEase was built to solve a familiar problem: small and medium-scale businesses
          struggle to set up an efficient online presence, while customers face slow, cluttered
          shopping experiences with limited visibility into pricing, availability and orders.
        </p>
        <p>
          Our platform brings together a customer-friendly storefront, a merchant catalog
          manager, and an admin dashboard — all on a three-tier architecture designed for
          scale, security and a smooth end-to-end experience.
        </p>
        <p>
          From browsing and cart management to secure checkout and order tracking, every
          interaction is designed to be fast, predictable, and pleasant.
        </p>
      </div>
      <Link to="/products" className="mt-10 inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm text-background">Explore the shop</Link>
    </section>
  );
}
