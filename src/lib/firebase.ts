import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  type User as FirebaseUser
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9UhrjCCBCuuiEmQ4rNE4lrfZJ4AaYej0",
  authDomain: "shopease-c3b85.firebaseapp.com",
  projectId: "shopease-c3b85",
  storageBucket: "shopease-c3b85.firebasestorage.app",
  messagingSenderId: "371519766115",
  appId: "1:371519766115:web:6452339596699f819d0256",
  measurementId: "G-1QC4VGGQNW"
};

// Initialize Firebase safely (avoid duplicating initialization in hot reload)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth
export const auth = getAuth(app);

// Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Initialize Analytics conditionally (client-side only)
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) {
      getAnalytics(app);
    }
  });
}

// Auth actions
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

export { onAuthStateChanged, type FirebaseUser };
