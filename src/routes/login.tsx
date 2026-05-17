import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  component: Login,
  head: () => ({
    meta: [
      { title: "Sign in — ShopEase" },
      { name: "description", content: "Sign in to your ShopEase account to view orders and manage your cart." },
    ],
  }),
});

function Login() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  return (
    <section className="mx-auto grid max-w-md px-6 py-20">
      <h1 className="font-display text-4xl">{mode === "signin" ? "Welcome back" : "Create your account"}</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {mode === "signin" ? "Sign in to continue shopping." : "Join ShopEase to save your cart and track orders."}
      </p>

      <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-4">
        {mode === "signup" && (
          <Field label="Full name" type="text" placeholder="Jane Doe" />
        )}
        <Field label="Email" type="email" placeholder="you@example.com" />
        <Field label="Password" type="password" placeholder="••••••••" />
        <button className="h-12 w-full rounded-full bg-foreground text-sm font-medium text-background transition hover:opacity-90">
          {mode === "signin" ? "Sign in" : "Create account"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {mode === "signin" ? "New to ShopEase? " : "Already have an account? "}
        <button onClick={() => setMode(mode === "signin" ? "signup" : "signin")} className="font-medium text-foreground underline-offset-4 hover:underline">
          {mode === "signin" ? "Create an account" : "Sign in"}
        </button>
      </p>
      <Link to="/" className="mt-2 text-center text-xs text-muted-foreground hover:text-foreground">← Back to home</Link>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <input {...props} className="mt-1.5 h-12 w-full rounded-lg border border-border bg-card px-4 text-sm outline-none focus:border-primary" />
    </label>
  );
}
