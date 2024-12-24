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
   updateCurrentUser,
} from "firebase/auth";
import { auth } from "./firebase";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./userSlice";

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
   user: User | null;
   loginWithGoogle: () => void;
   updateUser: (user: any) => Promise<void>;
};

export const FirebaseContext = createContext<FirebaseContextType | null>(null);

export const useFirebase = () => {
   const context = useContext(FirebaseContext);
   if (!context) throw "useFirebase should be used inside FirebaseProvider.";
   return context;
};

const FirebaseProvider = ({ children }: { children: ReactNode }) => {
   const dispatch = useDispatch();
   const [user, setUser] = useState<User | null>(null);

   const signupWithEmailPass = (email: string, password: string) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const loginWithEmailPass = (email: string, password: string) => {
      return signInWithEmailAndPassword(auth, email, password);
   };
   const updateUser = (user: User) => {
      return updateCurrentUser(auth, user);
   };

   const loginWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
   };

   const logout = () => signOut(auth);

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            const { uid, displayName, email, photoURL } = user;
            setUser(user);
            dispatch(addUser({ uid, displayName, email, photoURL }));
         } else {
            dispatch(removeUser());
         }
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
            updateUser,
         }}
      >
         {children}
      </FirebaseContext.Provider>
   );
};

export default FirebaseProvider;
