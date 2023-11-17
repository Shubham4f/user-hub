function DashboardLoader() {
  return (
    // Container for the loading animation with styling
    <div className="animate-pulse mx-auto my-4 p-1 md:p-2 w-fit shadow-md bg-white font-poppins text-jacarta text-center dark:bg-sky-900 dark:text-white md:rounded-lg">
      {/* Header row with column names */}
      <div className="flex justify-center items-center py-4 font-semibold text-xs md:text-sm">
        <div className="mx-0.5 md:mx-2 w-4 md:w-6">ID</div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-36">Username</div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-48">Email</div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-36">Phone</div>
        <div className="hidden sm:block mx-0.5 md:mx-2 w-20 md:w-36">
          Creation date
        </div>
      </div>
      {/* Rows with loading animation for data */}
      <div className="flex justify-center items-center py-4">
        <div className="mx-0.5 md:mx-2 w-4 md:w-6 h-8 rounded bg-slate-100 dark:bg-sky-800"></div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-36 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-48 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-36 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
        <div className="hidden sm:block mx-0.5 md:mx-2 w-20 md:w-36 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
      </div>
      <div className="flex justify-center items-center py-4">
        <div className="mx-0.5 md:mx-2 w-4 md:w-6 h-8 rounded bg-slate-100 dark:bg-sky-800"></div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-36 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-48 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-36 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
        <div className="hidden sm:block mx-0.5 md:mx-2 w-20 md:w-36 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
      </div>
      <div className="flex justify-center items-center py-4">
        <div className="mx-0.5 md:mx-2 w-4 md:w-6 h-8 rounded bg-slate-100 dark:bg-sky-800"></div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-36 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-48 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-36 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
        <div className="hidden sm:block mx-0.5 md:mx-2 w-20 md:w-36 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
      </div>
      <div className="flex justify-center items-center py-4">
        <div className="mx-0.5 md:mx-2 w-4 md:w-6 h-8 rounded bg-slate-100 dark:bg-sky-800"></div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-36 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-48 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-36 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
        <div className="hidden sm:block mx-0.5 md:mx-2 w-20 md:w-36 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
      </div>
      <div className="flex justify-center items-center py-4">
        <div className="mx-0.5 md:mx-2 w-4 md:w-6 h-8 rounded bg-slate-100 dark:bg-sky-800"></div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-36 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-48 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
        <div className="mx-0.5 md:mx-2 w-20 md:w-36 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
        <div className="hidden sm:block mx-0.5 md:mx-2 w-20 md:w-36 h-8 rounded-lg bg-slate-100 dark:bg-sky-800"></div>
      </div>
    </div>
  );
}

export default DashboardLoader;
