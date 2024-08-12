import { ToastContainer } from "react-toastify";
import { RegisterContext } from "../../context/registerContext";
import { useContext } from "react";
import { RegisterWrapper } from "../register/RegisterWrapper";
import { ArrowDownBtn } from "./ArrowDownBtn";

export const Home = () => {
  const { displayLogInForm } = useContext(RegisterContext);

  const navigateToProduct = () => {
    const element = document.getElementById("productSection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      dir="rtl"
      className="container flex justify-end items-center px-4 py-8 bg-home bg-gray-100 dark:bg-zinc-800 bg-center bg-cover bg-no-repeat h-50 min-w-full w-full text-white sm:h-72 md:h-96 lg:bg-desktopBg lg:h-dvh lg:px-[250px] xl:px-[330px]"
    >
      <div className="w-52 md:w-96 lg:w-[462px]">
        <h1 className="font-morabbaBold text-2xl md:text-4xl lg:text-6xl">
          قهوه عربیکا تانزانیا
        </h1>
        <h3 className="font-morabba text-xl md:text-2xl lg:text-5xl lg:mt-2"></h3>
        <div className="h-[1px] w-24 bg-orange-300 my-4 lg:w-32 lg:my-8"></div>
        <p className="font-Dana text-xs md:text-base lg:text-2xl">
          قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که
          در نواحی مختلف کمربند قهوه کشت میشود.
        </p>
      </div>
      <svg
        className="opacity-0 invisible absolute bottom-0 left-0 right-0 mx-auto text-gray-100 dark:text-zinc-800 lg:visible lg:opacity-100"
        width="100"
        height="22"
        viewBox="0 0 100 22"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z" />
      </svg>
      <ArrowDownBtn />
      <div
        onClick={navigateToProduct}
        className="absolute left-0 right-0 -bottom-4 mx-auto flex items-center justify-center w-8 h-8 border-2 border-orange-300 rounded-full cursor-pointer opacity-0 lg:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 text-zinc-800 dark:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
      {displayLogInForm && <RegisterWrapper />}
    </div>
  );
};
