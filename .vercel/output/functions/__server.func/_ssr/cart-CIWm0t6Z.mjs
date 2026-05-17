import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useCart } from "./router-CT1Gc3Qa.mjs";
import { f as formatINR } from "./products-B-KGtlcJ.mjs";
import { M as Minus, P as Plus, T as Trash2 } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function Cart() {
  const {
    items,
    setQty,
    remove,
    total,
    clear
  } = useCart();
  const shipping = total > 5e3 || total === 0 ? 0 : 199;
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-6 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl", children: "Your cart is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Once you add something you love, it'll show up here." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "mt-8 inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm text-background", children: "Start shopping" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.5fr_1fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl", children: "Shopping cart" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 divide-y divide-border border-y border-border", children: items.map(({
        product,
        qty
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4 py-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-28 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image, alt: product.name, className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: product.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg", children: product.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: formatINR(product.price * qty) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center rounded-full border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(product.id, qty - 1), className: "grid h-8 w-8 place-items-center text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3 w-3" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center text-sm", children: qty }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(product.id, qty + 1), className: "grid h-8 w-8 place-items-center text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => remove(product.id), className: "inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" }),
              " Remove"
            ] })
          ] })
        ] })
      ] }, product.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clear, className: "mt-6 text-sm text-muted-foreground hover:text-foreground", children: "Clear cart" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "h-fit rounded-2xl border border-border bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl", children: "Order summary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-6 space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Subtotal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: formatINR(total) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Shipping" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: shipping === 0 ? "Free" : formatINR(shipping) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-border pt-3 text-base font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: formatINR(total + shipping) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-6 h-12 w-full rounded-full bg-primary text-sm font-medium text-primary-foreground transition hover:opacity-90", children: "Proceed to checkout" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-xs text-muted-foreground", children: "Secure SSL-encrypted payment" })
    ] })
  ] });
}
export {
  Cart as component
};
