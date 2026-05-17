import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
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
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-6 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "About" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-5xl", children: "A simpler way to shop online." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-neutral mt-8 max-w-none space-y-5 text-base text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ShopEase was built to solve a familiar problem: small and medium-scale businesses struggle to set up an efficient online presence, while customers face slow, cluttered shopping experiences with limited visibility into pricing, availability and orders." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our platform brings together a customer-friendly storefront, a merchant catalog manager, and an admin dashboard — all on a three-tier architecture designed for scale, security and a smooth end-to-end experience." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "From browsing and cart management to secure checkout and order tracking, every interaction is designed to be fast, predictable, and pleasant." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "mt-10 inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm text-background", children: "Explore the shop" })
  ] });
}
export {
  About as component
};
