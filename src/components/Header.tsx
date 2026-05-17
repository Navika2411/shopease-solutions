import { Link } from "@tanstack/react-router";
import { ShoppingBag, User } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useAuth } from "@/lib/auth";

export function Header() {
  const { count } = useCart();
  const { user } = useAuth();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-2xl font-semibold tracking-tight">
          Shop<span className="text-primary">Ease</span>
        </Link>
        <nav className="hidden gap-8 text-sm md:flex">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} className="text-muted-foreground transition hover:text-foreground">Home</Link>
          <Link to="/products" activeProps={{ className: "text-foreground" }} className="text-muted-foreground transition hover:text-foreground">Shop</Link>
          <Link to="/about" activeProps={{ className: "text-foreground" }} className="text-muted-foreground transition hover:text-foreground">About</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/login" className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-foreground" aria-label="Account">
            {user ? (
              user.photoURL ? (
                <img src={user.photoURL} alt={user.displayName || "User"} className="h-7 w-7 rounded-full object-cover border border-border" />
              ) : (
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-semibold uppercase text-primary-foreground">
                  {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
                </div>
              )
            ) : (
              <User className="h-4 w-4" />
            )}
          </Link>
          <Link to="/cart" className="relative inline-flex h-9 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background transition hover:opacity-90">
            <ShoppingBag className="h-4 w-4" />
            <span>Cart</span>
            {count > 0 && (
              <span className="ml-1 rounded-full bg-primary px-1.5 text-xs text-primary-foreground">{count}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
