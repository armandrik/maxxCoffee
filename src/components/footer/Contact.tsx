export const Contact = () => {
  return (
    <div>
      <h1 className="font-DanaDemiBold text-2xl mb-6">در تماس باشیم</h1>
      <p className="flex items-start justify-strart gap-2 text-base">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        بندرانزلی - میدان شهدای 23 مهر - فروشگاه قهوه مکث
      </p>
      <p className="text-orange-300 flex items-center justify-strart gap-2 my-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
        arman.diik@gmail.com
      </p>
      <p className="flex items-center justify-strart gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
        09384851297
      </p>
      <div className="flex items-center justify-around gap-[6px] mt-6 mb-10">
        <button dir="ltr" className="flex items-center justify-center gap-2 py-3 px-4 w-44 h-12 font-DanaMedium text-orange-200 border border-orange-200 rounded-xl">
          @maxx_coffee
          <img src="../images/icons8-instagram 1.png" alt="ig icon"/>
        </button>
        <button dir="ltr" className="flex items-center justify-center gap-2 py-3 px-4 w-44 h-12 font-DanaMedium bg-gradient-to-l from-prizeBtn-100 to-prizeBtn-200 text-zinc-700 rounded-xl">
          @maxx_coffee
          <img src="../images/icons8-telegram-app 1.png" alt="telegram icon"/>
        </button>
      </div>
    </div>
  );
};
