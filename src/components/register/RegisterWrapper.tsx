import { useContext, useEffect, useRef, useCallback, useState } from "react";
import { RegisterContext } from "../../context/registerContext";
import { RegisterForm } from "./RegisterForm";
import { LogInForm } from "./LogInForm";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Slide, toast } from "react-toastify";

export const RegisterWrapper = () => {
  const [hasAccount, setHasAccount] = useState<boolean>(false);
  const isMenuOpen = useRef<HTMLDivElement | null>(null);
  const { setDisplayLogInForm, setUserDisplayName } =
    useContext(RegisterContext);

  const closeMenu = useCallback(
    (event: MouseEvent) => {
      if (
        isMenuOpen.current &&
        !isMenuOpen.current.contains(event.target as Node)
      ) {
        setDisplayLogInForm(false);
      }
    },
    [setDisplayLogInForm]
  );

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user && user.displayName) {
        setUserDisplayName(user.displayName);
      }

      setDisplayLogInForm(false);
      toastMessage(user?.displayName || "User");
      console.log("Google sign-in successful");
    } catch (error) {
      console.error("Google sign-in error", error);
    }
  };

  const toastMessage = (userDisplayName: string) => {
    toast.success(`خوش اومدی ${userDisplayName}`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [closeMenu]);

  return (
    <div
      ref={isMenuOpen}
      dir="rtl"
      className="fixed left-0 top-[17%] inset-x-0 mx-auto z-50 flex flex-col items-center w-[350px] sm:w-[500px] p-4 border-t-[3px] border-orange-300 rounded-2xl shadow-menuShadow transition-all bg-white dark:bg-zinc-700"
    >
      <h1 className="text-center text-xl md:text-2xl text-zinc-700 dark:text-white mb-5">
        {hasAccount ? "ورود به حساب" : "ایجاد حساب کاربری"}
      </h1>
      <div
        onClick={signInWithGoogle}
        className="w-[300px] h-12 cursor-pointer flex items-center justify-center gap-[10px] bg-gray-100 rounded-lg border-1 border-purple-50 hover:bg-gray-200 transition-all"
      >
        <img src="../images/google.png" className="w-5 h-5" />
        <h1 className="text-sm md:text-base text-zinc-700">
          با گوگل وارد شوید
        </h1>
      </div>
      <p className="text-sm md:text-base text-zinc-700 dark:text-white my-5">
        یا
      </p>
      {hasAccount ? (
        <LogInForm setHasAccount={setHasAccount} />
      ) : (
        <RegisterForm setHasAccount={setHasAccount} />
      )}
    </div>
  );
};
