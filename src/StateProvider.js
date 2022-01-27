import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";

export const stateContext = createContext();

const StateProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <stateContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </stateContext.Provider>
  );
};
export const useStateValue = () => useContext(stateContext);

export default StateProvider;
