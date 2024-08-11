export const SceletonLoad = () => {
  return (
    <div className="flex flex-col justify-around items-center bg-white shadow rounded-2xl p-2 h-72 dark:bg-zinc-700 md:h-auto">
      <div className="w-36 h-36 bg-slate-200 animate-pulse rounded-2xl my-2 md:w-44 md:h-44 md:mb-5 lg:w-[160px] lg:h-[160px] xl:w-[240px] xl:h-[240px] dark:bg-zinc-500"></div>
      <div className="w-2/3 h-2 rounded bg-slate-200 self-start animate-pulse dark:bg-zinc-500"></div>
      <div className="w-1/3 h-2 rounded bg-slate-200 self-start my-3 animate-pulse dark:bg-zinc-500"></div>
      <div className="flex container items-center gap-5 animate-puls">
        <div className="rounded-full bg-slate-200 h-5 w-5 dark:bg-zinc-500"></div>
        <div className="rounded-full bg-slate-200 h-5 w-5 dark:bg-zinc-500"></div>
        <div className="rounded w-1/3 h-2 bg-slate-200 mr-auto dark:bg-zinc-500"></div>
      </div>
    </div>
  );
};
