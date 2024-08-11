import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { auth } from "../../firebaseConfig";
import { RegisterContext } from "../../context/registerContext";
import { Slide, toast } from "react-toastify";
import { Loader } from "./Loader";

type LogInFormType = {
  setHasAccount: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LogInForm = ({ setHasAccount }: LogInFormType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [btnState, setBtnState] = useState<boolean>(false);
  const { setDisplayLogInForm, setUserDisplayName } =
    useContext(RegisterContext);

  const emptyInputs = () => {
    setEmail("");
    setPassword("");
  };

  const actionsAfterRegisterSuccess = () => {
    if (auth.currentUser) {
      setUserDisplayName(auth.currentUser.displayName);
      toastMessage(auth.currentUser.displayName || "User");
    }
    emptyInputs();
    setDisplayLogInForm(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setBtnState(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      actionsAfterRegisterSuccess();
      setBtnState(false);
      console.log("logges in successfully");
      // User logged in successfully
    } catch (err: any) {
      switch (err.code) {
        case "auth/user-not-found":
          setError("کاربر با این ایمیل پیدا نشد");
          break;
        case "auth/invalid-credential":
          setError("ایمیل یا پسورد اشتباه است");
          break;
        case "auth/wrong-password":
          setError("پسورد اشتباه اصت");
          break;
        case "auth/invalid-email":
          setError("ایمیل را به درستی وارد کن");
          break;
        default:
          setError("دوباره تلاش کن");
      }
      emptyInputs();
      setBtnState(false);
    }
  };

  const toastMessage = (username: string) => {
    toast.success(`خوش اومدی ${username}`, {
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

  return (
    <>
      <form onSubmit={handleLogin} className="flex flex-col items-center gap-5">
        <div className="relative">
          <div className="absolute inset-y-0 left-4 top-0 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-zinc-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="آدرس ایمیل"
            className="text-zinc-800 text-sm bg-gray-100 rounded-lg w-[300px] h-12 placeholder-zinc-700 border-[1px] border-gray-100 outline-none focus:border-gray-200 px-4 py-3 transition-all"
          />
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-4 top-0 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-zinc-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="رمز عبور"
            className="text-zinc-800 text-sm bg-gray-100 rounded-lg w-[300px] h-12 placeholder-zinc-700 border-[1px] border-gray-100 outline-none focus:border-gray-200 px-4 py-3 transition-all"
          />
        </div>
        <button className="relative w-[300px] h-12 font-DanaMedium bg-gradient-to-l from-prizeBtn-100 to-prizeBtn-200 text-white rounded-xl">
          {btnState ? <Loader /> : "ورود"}
        </button>
      </form>
      <p className="text-zinc-700 dark:text-white mt-5 text-sm md:text-base">
        حساب کاربری ندارید؟
        <span
          onClick={() => setHasAccount(false)}
          className="mr-1 cursor-pointer text-orange-300 hover:text-orange-400 transition-all text-sm md:text-base"
        >
          ثبت نام کنید
        </span>
      </p>
      {error && <p className="text-xs text-red-400 mt-5">{error}</p>}
    </>
  );
};
