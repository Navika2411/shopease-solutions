import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useCart } from "./router-CT1Gc3Qa.mjs";
import { f as formatINR } from "./products-B-KGtlcJ.mjs";
import { P as Plus } from "../_libs/lucide-react.mjs";
function ProductCard({ product }) {
  const { add } = useCart();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden rounded-xl bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: product.image,
          alt: product.name,
          loading: "lazy",
          className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => add(product),
          className: "absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground shadow-md transition hover:bg-primary hover:text-primary-foreground",
          "aria-label": `Add ${product.name} to cart`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: product.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-0.5 font-display text-lg leading-tight", children: product.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-nowrap font-medium", children: formatINR(product.price) })
    ] })
  ] });
}
export {
  ProductCard as P
};
