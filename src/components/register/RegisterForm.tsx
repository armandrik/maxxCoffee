import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { auth } from "../../firebaseConfig";
import { RegisterContext } from "../../context/registerContext";
import { Slide, toast } from "react-toastify";
import { Loader } from "./Loader";

type registerFormType = {
  setHasAccount: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RegisterForm = ({ setHasAccount }: registerFormType) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [btnState, setBtnState] = useState<boolean>(false);
  const { setDisplayLogInForm, setUserDisplayName } =
    useContext(RegisterContext);

  const emptyInputs = () => {
    setEmail("");
    setPassword("");
    setUserName("");
  };

  const actionsAfterRegisterSuccess = () => {
    setUserDisplayName(userName);
    emptyInputs();
    setDisplayLogInForm(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBtnState(true);
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: userName,
        });
      }
      actionsAfterRegisterSuccess();
      toastMessage();
      setBtnState(false);
      console.log("success");
    } catch (err: any) {
      console.log("Firebase Error Code:", err.code); // Log the error code for debugging
      switch (err.code) {
        case "auth/email-already-in-use":
          setError("این ایمیل از قبل ثبت شده");
          break;
        case "auth/wrong-password":
          setError("پسورد اشتباه است");
          break;
        case "auth/invalid-email":
          setError("ایمیل را به درستی وارد کنید");
          break;
        case "auth/user-disabled":
          setError("حساب کاربری غیرفعال است");
          break;
        default:
          setError("دوباره تلاش کنید");
      }
      setBtnState(false);
      emptyInputs();
    }
  };

  const toastMessage = () => {
    toast.success(`خوش اومدی ${userName}`, {
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5"
      >
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
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            placeholder="نام کاربری"
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
        <button
          disabled={btnState}
          className="relative w-[300px] h-12 font-DanaMedium bg-gradient-to-l from-prizeBtn-100 to-prizeBtn-200 text-white rounded-xl"
        >
          {btnState ? <Loader /> : "ادامه"}
        </button>
      </form>
      <p className="text-zinc-700 dark:text-white mt-5 text-sm md:text-base">
        از قبل حساب کاربری دارید؟
        <span
          onClick={() => setHasAccount(true)}
          className="mr-1 cursor-pointer text-orange-300 hover:text-orange-400 transition-all text-sm md:text-base"
        >
          وارد شوید
        </span>
      </p>
      {error && <p className="text-xs text-red-400 mt-5">{error}</p>}
    </>
  );
};
