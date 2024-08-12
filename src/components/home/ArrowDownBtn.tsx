export const ArrowDownBtn = () => {
  return (
    <div className="absolute bottom-0 right-0 left-0 mx-auto w-52 h-52 overflow-hidden invisible opacity-0 lg:visible lg:opacity-100">
      <div className="absolute -bottom-[100px] right-0 left-0 mx-auto w-50 h-50 border border-white/25 rounded-full animate-pulse-fast">
        <div className="absolute top-0 left-0 right-0 bottom-0 my-auto mx-auto w-36 h-36 border border-white/50 rounded-full animate-pulse-delayed">
          <div className="absolute top-0 left-0 right-0 bottom-0 my-auto mx-auto w-24 h-24 border border-white/80 rounded-full animate-pulse-more-delayed">
          </div>
        </div>
      </div>
    </div>
  );
};
