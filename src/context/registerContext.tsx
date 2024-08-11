import { onAuthStateChanged } from "firebase/auth";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";

type RegisterProviderProp = {
  children: React.ReactNode;
};

type RegisterContextType = {
  displayLogInForm: boolean;
  userDisplayName: string | null;
  setUserDisplayName: Dispatch<SetStateAction<string | null>>;
  setDisplayLogInForm: Dispatch<SetStateAction<boolean>>;
  toggleForm: () => void;
};

export const RegisterContext = createContext<RegisterContextType>(
  {} as RegisterContextType
);

export const RegisterProvider = ({ children }: RegisterProviderProp) => {
  const [displayLogInForm, setDisplayLogInForm] = useState<boolean>(false);
  const [userDisplayName, setUserDisplayName] = useState<string | null>(null);

  const toggleForm = () => {
    setDisplayLogInForm(!displayLogInForm);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDisplayName(user.displayName);
      } else {
        setUserDisplayName(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <RegisterContext.Provider
      value={{
        displayLogInForm,
        toggleForm,
        setDisplayLogInForm,
        userDisplayName,
        setUserDisplayName,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
