export default function Loader() {
  return (
    <div className="w-full flex items-center justify-center py-12">
      <div className="inline-flex items-center gap-3 text-slate-500">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
        </span>
        <span className="text-sm">در حال بارگذاری...</span>
      </div>
    </div>
  );
}


