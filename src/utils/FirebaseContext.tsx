import {
   createContext,
   ReactNode,
   useContext,
   useEffect,
   useState,
} from "react";
import {
   signInWithEmailAndPassword,
   createUserWithEmailAndPassword,
   UserCredential,
   User,
   signInWithPopup,
   signOut,
   onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

type FirebaseContextType = {
   signupWithEmailPass: (
      email: string,
      password: string
   ) => Promise<UserCredential>;
   loginWithEmailPass: (
      email: string,
      password: string
   ) => Promise<UserCredential>;
   logout: () => void;
   user: User | null;
   loginWithGoogle: () => void;
};

export const FirebaseContext = createContext<FirebaseContextType | null>(null);

export const useFirebase = () => {
   const context = useContext(FirebaseContext);
   if (!context) throw "useFirebase should be used inside FirebaseProvider.";
   return context;
};

const FirebaseProvider = ({ children }: { children: ReactNode }) => {
   const [user, setUser] = useState<User | null>(null);

   const signupWithEmailPass = (email: string, password: string) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const loginWithEmailPass = (email: string, password: string) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const loginWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
   };

   const logout = () => signOut(auth);

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         setUser(user);
      });
   }, []);

   return (
      <FirebaseContext.Provider
         value={{
            signupWithEmailPass,
            loginWithEmailPass,
            logout,
            user,
            loginWithGoogle,
         }}
      >
         {children}
      </FirebaseContext.Provider>
   );
};

export default FirebaseProvider;
