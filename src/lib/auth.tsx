import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { auth, signInWithGoogle, logout, onAuthStateChanged, type FirebaseUser } from "./firebase";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile 
} from "firebase/auth";

type AuthCtx = {
  user: FirebaseUser | null;
  loading: boolean;
  loginWithGoogle: () => Promise<FirebaseUser>;
  signInWithEmail: (email: string, pass: string) => Promise<FirebaseUser>;
  signUpWithEmail: (email: string, pass: string, name: string) => Promise<FirebaseUser>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only subscribe to auth state changes in the browser
    if (typeof window === "undefined") {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      const loggedInUser = await signInWithGoogle();
      setUser(loggedInUser);
      setLoading(false);
      return loggedInUser;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const signInWithEmail = async (email: string, pass: string) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, pass);
      setUser(result.user);
      setLoading(false);
      return result.user;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const signUpWithEmail = async (email: string, pass: string, name: string) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, pass);
      await updateProfile(result.user, { displayName: name });
      // Force refresh auth user state to include displayName
      const updatedUser = auth.currentUser;
      setUser(updatedUser);
      setLoading(false);
      return result.user;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await logout();
      setUser(null);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        loginWithGoogle,
        signInWithEmail,
        signUpWithEmail,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
