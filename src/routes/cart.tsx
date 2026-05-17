import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Minus, Plus, Trash2, CheckCircle, ShoppingBag, Loader2 } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatINR } from "@/lib/products";
import { useAuth } from "@/lib/auth";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/cart")({
  component: Cart,
  head: () => ({
    meta: [
      { title: "Your cart — ShopEase" },
      { name: "description", content: "Review items in your ShopEase cart and proceed to secure checkout." },
    ],
  }),
});

function Cart() {
  const { items, setQty, remove, total, clear } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderNumber, setOrderId] = useState("");
  
  const shipping = total > 5000 || total === 0 ? 0 : 199;

  const handleCheckout = () => {
    // 1. Authorization Gate before buying/checking out
    if (!user) {
      toast.error("Authentication required", {
        description: "Please sign in to your account before purchasing a product.",
      });
      // Redirect to /login page with a redirect back to /cart
      navigate({ 
        to: "/login", 
        search: { redirect: "/cart" } 
      });
      return;
    }

    // 2. Process mock payment and place order
    setCheckoutLoading(true);
    setTimeout(() => {
      const mockOrderNo = "SE-" + Math.floor(100000 + Math.random() * 900000);
      setOrderId(mockOrderNo);
      setIsOrdered(true);
      clear(); // Empty the cart
      setCheckoutLoading(false);
      
      toast.success("Order Placed Successfully!", {
        description: `Thank you for shopping! Order number: ${mockOrderNo}`,
      });
    }, 1500);
  };

  // If order is placed successfully, render confirmation screen
  if (isOrdered) {
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 4); // Delivery in 4 days
    
    const formattedDeliveryDate = deliveryDate.toLocaleDateString("en-IN", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return (
      <section className="mx-auto max-w-xl px-6 py-20 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-md">
          <CheckCircle className="h-10 w-10 animate-bounce" />
        </div>
        
        <h1 className="mt-6 font-display text-4xl font-bold text-foreground">Order Confirmed!</h1>
        <p className="mt-3 text-muted-foreground">
          Thank you for buying from ShopEase, <span className="font-semibold text-foreground">{user?.displayName || user?.email}</span>. Your payment was verified and processed securely.
        </p>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-left shadow-sm">
          <h2 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Order Details</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between border-b border-border/50 pb-2.5">
              <span className="text-muted-foreground">Order Number</span>
              <span className="font-mono font-medium text-foreground">{orderNumber}</span>
            </div>
            <div className="flex justify-between border-b border-border/50 pb-2.5">
              <span className="text-muted-foreground">Delivery Method</span>
              <span className="font-medium text-foreground">Standard Delivery</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-muted-foreground">Estimated Delivery</span>
              <span className="font-medium text-foreground">{formattedDeliveryDate}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <Link to="/products" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90 shadow-md">
            <ShoppingBag className="h-4 w-4" /> Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-display text-5xl">Your cart is empty</h1>
        <p className="mt-4 text-muted-foreground">Once you add something you love, it'll show up here.</p>
        <Link to="/products" className="mt-8 inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm text-background">Start shopping</Link>
      </section>
    );
  }

  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.5fr_1fr]">
      <div>
        <h1 className="font-display text-4xl">Shopping cart</h1>
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {items.map(({ product, qty }) => (
            <li key={product.id} className="flex gap-4 py-6">
              <div className="h-28 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-secondary">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{product.category}</p>
                    <p className="font-display text-lg">{product.name}</p>
                  </div>
                  <p className="font-medium">{formatINR(product.price * qty)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center rounded-full border border-border">
                    <button onClick={() => setQty(product.id, qty - 1)} className="grid h-8 w-8 place-items-center text-muted-foreground hover:text-foreground"><Minus className="h-3 w-3" /></button>
                    <span className="w-8 text-center text-sm">{qty}</span>
                    <button onClick={() => setQty(product.id, qty + 1)} className="grid h-8 w-8 place-items-center text-muted-foreground hover:text-foreground"><Plus className="h-3 w-3" /></button>
                  </div>
                  <button onClick={() => remove(product.id)} className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-3 w-3" /> Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={clear} className="mt-6 text-sm text-muted-foreground hover:text-foreground">Clear cart</button>
      </div>

      <aside className="h-fit rounded-2xl border border-border bg-card p-6">
        <h2 className="font-display text-2xl">Order summary</h2>
        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal</dt><dd>{formatINR(total)}</dd></div>
          <div className="flex justify-between"><dt className="text-muted-foreground">Shipping</dt><dd>{shipping === 0 ? "Free" : formatINR(shipping)}</dd></div>
          <div className="flex justify-between border-t border-border pt-3 text-base font-medium"><dt>Total</dt><dd>{formatINR(total + shipping)}</dd></div>
        </dl>
        <button 
          onClick={handleCheckout}
          disabled={checkoutLoading}
          className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-50 cursor-pointer shadow-md"
        >
          {checkoutLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            "Proceed to checkout"
          )}
        </button>
        <p className="mt-3 text-center text-xs text-muted-foreground">Secure SSL-encrypted payment</p>
      </aside>
    </section>
  );
}
