export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-semibold">Shop<span className="text-primary">Ease</span></p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            A modern e-commerce platform built for small and medium businesses.
          </p>
        </div>
        {[
          { title: "Shop", links: ["New arrivals", "Best sellers", "Sale", "Gift cards"] },
          { title: "Support", links: ["Contact", "Shipping", "Returns", "FAQ"] },
          { title: "Company", links: ["About", "Careers", "Press", "Sustainability"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold">{col.title}</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {col.links.map((l) => <li key={l}><a className="hover:text-foreground" href="#">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ShopEase. Crafted with care.
      </div>
    </footer>
  );
}
