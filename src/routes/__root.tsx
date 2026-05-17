import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { CartProvider } from "@/lib/cart";
import { AuthProvider } from "@/lib/auth";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl">404</h1>
        <p className="mt-2 text-muted-foreground">This page wandered off.</p>
        <Link to="/" className="mt-6 inline-flex h-10 items-center rounded-full bg-foreground px-5 text-sm text-background">Back home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try refreshing the page.</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 inline-flex h-10 items-center rounded-full bg-foreground px-5 text-sm text-background">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ShopEase — Modern online shopping" },
      { name: "description", content: "ShopEase is a modern e-commerce platform for browsing, shopping and managing orders with ease." },
      { property: "og:title", content: "ShopEase" },
      { property: "og:description", content: "Modern e-commerce, made simple." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1"><Outlet /></main>
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
