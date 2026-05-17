import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth } from "@/lib/auth";
import { toast } from "sonner";
import { LogOut, ShoppingBag, Mail, Lock, User as UserIcon, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/login")({
  component: Login,
  head: () => ({
    meta: [
      { title: "Sign in — ShopEase" },
      { name: "description", content: "Sign in to your ShopEase account to view orders and manage your cart with Firebase Auth." },
    ],
  }),
});

function Login() {
  const navigate = useNavigate();
  const { user, loading, loginWithGoogle, signInWithEmail, signUpWithEmail, signOut } = useAuth();
  
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  // Handle standard email authentication
  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    
    if (!email || !password) {
      setFormError("Please fill in all fields.");
      return;
    }
    if (password.length < 6) {
      setFormError("Password must be at least 6 characters long.");
      return;
    }

    setFormLoading(true);
    try {
      if (mode === "signin") {
        await signInWithEmail(email, password);
        toast.success("Welcome back!", {
          description: "Successfully signed in to ShopEase.",
        });
      } else {
        if (!name) {
          setFormError("Please enter your name.");
          setFormLoading(false);
          return;
        }
        await signUpWithEmail(email, password, name);
        toast.success("Account created!", {
          description: "Welcome to ShopEase! Explore our products.",
        });
      }
      
      // Redirect back if user was checkout-bound, or home
      const search = Route.useSearch() as { redirect?: string };
      navigate({ to: search.redirect || "/" });
    } catch (err: any) {
      console.error(err);
      let errMsg = "Authentication failed. Please check your credentials.";
      if (err.code === "auth/email-already-in-use") {
        errMsg = "An account already exists with this email address.";
      } else if (err.code === "auth/invalid-credential" || err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
        errMsg = "Invalid email or password.";
      } else if (err.message) {
        errMsg = err.message;
      }
      setFormError(errMsg);
      toast.error("Authentication Error", { description: errMsg });
    } finally {
      setFormLoading(false);
    }
  };

  // Handle Google authentication
  const handleGoogleSignIn = async () => {
    setFormError("");
    setFormLoading(true);
    try {
      await loginWithGoogle();
      toast.success("Signed in with Google!", {
        description: "Welcome to ShopEase.",
      });
      const search = Route.useSearch() as { redirect?: string };
      navigate({ to: search.redirect || "/" });
    } catch (err: any) {
      console.error(err);
      // Suppress popup-closed error as a toast if needed, otherwise notify
      if (err.code !== "auth/popup-closed-by-user") {
        toast.error("Google Sign-In Error", {
          description: err.message || "Failed to authenticate with Google.",
        });
      }
    } finally {
      setFormLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.info("Signed out", {
        description: "You have been successfully logged out of ShopEase.",
      });
    } catch (err) {
      toast.error("Sign-out Error", {
        description: "Failed to sign out. Please try again.",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p className="text-sm text-muted-foreground">Checking authentication state...</p>
      </div>
    );
  }

  // Display user profile if already logged in
  if (user) {
    return (
      <section className="mx-auto max-w-md px-6 py-24 text-center">
        <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-accent text-white shadow-xl shadow-primary/10">
          {user.photoURL ? (
            <img src={user.photoURL} alt={user.displayName || "User"} className="h-full w-full rounded-full object-cover border-2 border-background" />
          ) : (
            <span className="text-3xl font-semibold uppercase">{user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}</span>
          )}
        </div>
        
        <h1 className="mt-6 font-display text-3xl font-bold">Hello, {user.displayName || "Shopper"}!</h1>
        <p className="mt-2 text-sm text-muted-foreground">{user.email}</p>
        
        <div className="mt-8 flex flex-col gap-3">
          <Link to="/products" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90">
            <ShoppingBag className="h-4 w-4" /> Start Shopping
          </Link>
          <button onClick={handleSignOut} className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-medium hover:bg-secondary text-destructive transition">
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto grid max-w-md px-6 py-16">
      <div className="text-center md:text-left">
        <h1 className="font-display text-4xl font-semibold tracking-tight">{mode === "signin" ? "Welcome back" : "Create your account"}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {mode === "signin" ? "Sign in to continue shopping." : "Join ShopEase to save your cart and track orders."}
        </p>
      </div>

      {formError && (
        <div className="mt-6 flex items-start gap-3 rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <p>{formError}</p>
        </div>
      )}

      {/* Google Login Option */}
      <button 
        onClick={handleGoogleSignIn} 
        disabled={formLoading}
        type="button" 
        className="mt-6 flex h-12 w-full items-center justify-center gap-3 rounded-full border border-border bg-card px-4 text-sm font-medium transition hover:bg-secondary disabled:opacity-50 cursor-pointer shadow-sm"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" width="24" height="24">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69c-.29 1.5-.1.85-2.11 2.2l3.28 2.54c1.92-1.77 3.88-4.38 3.88-6.59z"/>
          <path fill="#34A853" d="M12 24c3.24 0 5.97-1.08 7.96-2.91l-3.28-2.54c-.9.6-2.06.97-3.26.97-3.14 0-5.8-2.12-6.75-4.97L1.29 17.5C3.27 21.43 7.31 24 12 24z"/>
          <path fill="#FBBC05" d="M5.25 14.55A7.18 7.18 0 0 1 4.8 12c0-.88.15-1.74.45-2.55V6.36H1.29A11.96 11.96 0 0 0 0 12c0 2.05.52 4 1.29 5.64l3.96-3.09z"/>
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.96 1.19 15.24 0 12 0 7.31 0 3.27 2.57 1.29 6.36l3.96 3.09c.95-2.85 3.61-4.7 6.75-4.7z"/>
        </svg>
        Continue with Google
      </button>

      <div className="relative mt-6 flex items-center justify-center">
        <span className="absolute inset-x-0 h-px bg-border"></span>
        <span className="relative bg-background px-3 text-xs uppercase tracking-wider text-muted-foreground font-semibold">Or email login</span>
      </div>

      <form onSubmit={handleAuthSubmit} className="mt-6 space-y-4">
        {mode === "signup" && (
          <Field 
            label="Full name" 
            type="text" 
            placeholder="Jane Doe" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            icon={<UserIcon className="h-4 w-4 text-muted-foreground" />}
            disabled={formLoading}
          />
        )}
        
        <Field 
          label="Email" 
          type="email" 
          placeholder="you@example.com" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          icon={<Mail className="h-4 w-4 text-muted-foreground" />}
          disabled={formLoading}
        />
        
        <Field 
          label="Password" 
          type="password" 
          placeholder="••••••••" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          icon={<Lock className="h-4 w-4 text-muted-foreground" />}
          disabled={formLoading}
        />

        <button 
          type="submit"
          disabled={formLoading}
          className="relative flex h-12 w-full items-center justify-center rounded-full bg-foreground text-sm font-medium text-background transition hover:opacity-90 disabled:opacity-50 cursor-pointer shadow-md"
        >
          {formLoading ? (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
          ) : (
            mode === "signin" ? "Sign in" : "Create account"
          )}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {mode === "signin" ? "New to ShopEase? " : "Already have an account? "}
        <button 
          onClick={() => {
            setMode(mode === "signin" ? "signup" : "signin");
            setFormError("");
          }} 
          className="font-medium text-foreground underline-offset-4 hover:underline cursor-pointer"
        >
          {mode === "signin" ? "Create an account" : "Sign in"}
        </button>
      </p>
      
      <Link to="/" className="mt-4 text-center text-xs text-muted-foreground hover:text-foreground">← Back to home</Link>
    </section>
  );
}

function Field({ label, icon, ...props }: { label: string; icon?: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{label}</span>
      <div className="relative mt-1.5 flex items-center">
        {icon && (
          <div className="absolute left-4">{icon}</div>
        )}
        <input 
          {...props} 
          className={`h-12 w-full rounded-lg border border-border bg-card pr-4 text-sm outline-none focus:border-primary transition shadow-sm ${icon ? 'pl-11' : 'pl-4'}`} 
        />
      </div>
    </label>
  );
}
