import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
   UserCredential,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { createContext, ReactNode, useContext } from "react";
import { auth } from "./firebase";

type FirebaseContextType = {
   signupWithEmailPass: (
      email: string,
      password: string
   ) => Promise<UserCredential>;
   loginWithEmailPass: (
      email: string,
      password: string
   ) => Promise<UserCredential>;
   logout: () => Promise<void>;
   loginWithGoogle: () => void;
   updateUser: (userDetails: any) => Promise<void>;
};

export const FirebaseContext = createContext<FirebaseContextType | null>(null);

export const useFirebase = () => {
   const context = useContext(FirebaseContext);
   if (!context) throw "useFirebase should be used inside FirebaseProvider.";
   return context;
};

const FirebaseProvider = ({ children }: { children: ReactNode }) => {
   const signupWithEmailPass = (email: string, password: string) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const loginWithEmailPass = (email: string, password: string) => {
      return signInWithEmailAndPassword(auth, email, password);
   };
   const updateUser = (userDetails: {
      displayName?: string;
      profilePic?: string;
   }) => {
      if (auth.currentUser) return updateProfile(auth.currentUser, userDetails);
      return Promise.resolve();
   };

   const loginWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
   };

   const logout = () => signOut(auth);

   return (
      <FirebaseContext.Provider
         value={{
            signupWithEmailPass,
            loginWithEmailPass,
            logout,
            loginWithGoogle,
            updateUser,
         }}
      >
         {children}
      </FirebaseContext.Provider>
   );
};

export default FirebaseProvider;
