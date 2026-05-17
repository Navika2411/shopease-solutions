import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
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
function Login() {
  const [mode, setMode] = reactExports.useState("signin");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto grid max-w-md px-6 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl", children: mode === "signin" ? "Welcome back" : "Create your account" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: mode === "signin" ? "Sign in to continue shopping." : "Join ShopEase to save your cart and track orders." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "mt-8 space-y-4", children: [
      mode === "signup" && /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", type: "text", placeholder: "Jane Doe" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", type: "email", placeholder: "you@example.com" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Password", type: "password", placeholder: "••••••••" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "h-12 w-full rounded-full bg-foreground text-sm font-medium text-background transition hover:opacity-90", children: mode === "signin" ? "Sign in" : "Create account" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-sm text-muted-foreground", children: [
      mode === "signin" ? "New to ShopEase? " : "Already have an account? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode(mode === "signin" ? "signup" : "signin"), className: "font-medium text-foreground underline-offset-4 hover:underline", children: mode === "signin" ? "Create an account" : "Sign in" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-2 text-center text-xs text-muted-foreground hover:text-foreground", children: "← Back to home" })
  ] });
}
function Field({
  label,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...props, className: "mt-1.5 h-12 w-full rounded-lg border border-border bg-card px-4 text-sm outline-none focus:border-primary" })
  ] });
}
export {
  Login as component
};
