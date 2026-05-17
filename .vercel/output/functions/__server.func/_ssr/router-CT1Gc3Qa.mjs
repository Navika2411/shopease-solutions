import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { U as User, b as ShoppingBag } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-GOQxcg56.css";
const Ctx = reactExports.createContext(null);
function CartProvider({ children }) {
  const [items, setItems] = reactExports.useState([]);
  reactExports.useEffect(() => {
    try {
      const raw = localStorage.getItem("shopease-cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {
    }
  }, []);
  reactExports.useEffect(() => {
    localStorage.setItem("shopease-cart", JSON.stringify(items));
  }, [items]);
  const add = (p) => setItems((prev) => {
    const ex = prev.find((i) => i.product.id === p.id);
    if (ex) return prev.map((i) => i.product.id === p.id ? { ...i, qty: i.qty + 1 } : i);
    return [...prev, { product: p, qty: 1 }];
  });
  const remove = (id) => setItems((p) => p.filter((i) => i.product.id !== id));
  const setQty = (id, qty) => setItems((p) => p.map((i) => i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i));
  const clear = () => setItems([]);
  const count = items.reduce((a, i) => a + i.qty, 0);
  const total = items.reduce((a, i) => a + i.qty * i.product.price, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ctx.Provider, { value: { items, add, remove, setQty, clear, count, total }, children });
}
const useCart = () => {
  const c = reactExports.useContext(Ctx);
  if (!c) throw new Error("useCart outside provider");
  return c;
};
function Header() {
  const { count } = useCart();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "font-display text-2xl font-semibold tracking-tight", children: [
      "Shop",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Ease" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden gap-8 text-sm md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", activeOptions: { exact: true }, activeProps: { className: "text-foreground" }, className: "text-muted-foreground transition hover:text-foreground", children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", activeProps: { className: "text-foreground" }, className: "text-muted-foreground transition hover:text-foreground", children: "Shop" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", activeProps: { className: "text-foreground" }, className: "text-muted-foreground transition hover:text-foreground", children: "About" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-foreground", "aria-label": "Account", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cart", className: "relative inline-flex h-9 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background transition hover:opacity-90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cart" }),
        count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 rounded-full bg-primary px-1.5 text-xs text-primary-foreground", children: count })
      ] })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-24 border-t border-border bg-secondary/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xl font-semibold", children: [
          "Shop",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Ease" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-xs text-sm text-muted-foreground", children: "A modern e-commerce platform built for small and medium businesses." })
      ] }),
      [
        { title: "Shop", links: ["New arrivals", "Best sellers", "Sale", "Gift cards"] },
        { title: "Support", links: ["Contact", "Shipping", "Returns", "FAQ"] },
        { title: "Company", links: ["About", "Careers", "Press", "Sustainability"] }
      ].map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold", children: col.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: col.links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:text-foreground", href: "#", children: l }) }, l)) })
      ] }, col.title))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border py-5 text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ShopEase. Crafted with care."
    ] })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-7xl", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "This page wandered off." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-6 inline-flex h-10 items-center rounded-full bg-foreground px-5 text-sm text-background", children: "Back home" })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Try refreshing the page." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
      router2.invalidate();
      reset();
    }, className: "mt-6 inline-flex h-10 items-center rounded-full bg-foreground px-5 text-sm text-background", children: "Try again" })
  ] }) });
}
const Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ShopEase — Modern online shopping" },
      { name: "description", content: "ShopEase is a modern e-commerce platform for browsing, shopping and managing orders with ease." },
      { property: "og:title", content: "ShopEase" },
      { property: "og:description", content: "Modern e-commerce, made simple." },
      { property: "og:type", content: "website" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$5.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CartProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) }) });
}
const $$splitComponentImporter$4 = () => import("./products-yZJxN5eD.mjs");
const Route$4 = createFileRoute("/products")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  head: () => ({
    meta: [{
      title: "Shop all products — ShopEase"
    }, {
      name: "description",
      content: "Browse the full ShopEase catalog across apparel, accessories, audio and home."
    }]
  })
});
const $$splitComponentImporter$3 = () => import("./login-BTF8Fdyo.mjs");
const Route$3 = createFileRoute("/login")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => ({
    meta: [{
      title: "Sign in — ShopEase"
    }, {
      name: "description",
      content: "Sign in to your ShopEase account to view orders and manage your cart."
    }]
  })
});
const $$splitComponentImporter$2 = () => import("./cart-CIWm0t6Z.mjs");
const Route$2 = createFileRoute("/cart")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: "Your cart — ShopEase"
    }, {
      name: "description",
      content: "Review items in your ShopEase cart and proceed to secure checkout."
    }]
  })
});
const $$splitComponentImporter$1 = () => import("./about-CKAWsS3Q.mjs");
const Route$1 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => ({
    meta: [{
      title: "About ShopEase — Our story"
    }, {
      name: "description",
      content: "ShopEase is built to make online shopping simple for customers and merchants alike."
    }]
  })
});
const $$splitComponentImporter = () => import("./index-d4yzqjva.mjs");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: "ShopEase — Shop everyday essentials"
    }, {
      name: "description",
      content: "Discover curated products, manage your cart, and check out securely on ShopEase."
    }]
  })
});
const ProductsRoute = Route$4.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => Route$5
});
const LoginRoute = Route$3.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$5
});
const CartRoute = Route$2.update({
  id: "/cart",
  path: "/cart",
  getParentRoute: () => Route$5
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$5
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CartRoute,
  LoginRoute,
  ProductsRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  router as r,
  useCart as u
};
