export const BestSellingProductsHeader = () => {
  const scrollLeft = () => {
    document.getElementById("scrollContainer")!.scrollLeft += 300;
  };

  const scrollRight = () => {
    document.getElementById("scrollContainer")!.scrollLeft -= 300;
  };

  return (
    <div className="flex items-center justify-between mb-5">
      <div>
        <h1 className="font-morabbaMedium text-zinc-700 text-2xl mb-1 dark:text-white md:text-3xl">
          محصولات پرفروش
        </h1>
        <p className="text-zinc-700 text-lg font-morabba dark:text-white md:text-xl">
          پیشنهاد قهوه خور ها ...
        </p>
      </div>
      <div className="flex items-center justify-between gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={scrollLeft}
          className="size-9 bg-white shadow rounded-full p-2 cursor-pointer hover:bg-gray-300 transition-all dark:bg-zinc-700 dark:text-white dark:hover:bg-white dark:hover:text-zinc-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={scrollRight}
          className="size-9 bg-white shadow rounded-full p-2 cursor-pointer hover:bg-gray-300 transition-all dark:bg-zinc-700 dark:text-white dark:hover:bg-white dark:hover:text-zinc-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};
