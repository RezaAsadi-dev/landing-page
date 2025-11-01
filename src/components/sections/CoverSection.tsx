export default function CoverSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative">
      <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 transition-all duration-300 px-2">
        <div className="inline-block">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Platin
          </div>
        </div>
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance text-white">FARSIFLOW</h1>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-slate-400">VOICE TO TEXT</p>
        </div>
        <div className="pt-4 sm:pt-6 md:pt-8 space-y-1 sm:space-y-2 text-slate-400">
          <p className="text-sm sm:text-base md:text-lg">041-33363096</p>
          <p className="text-xs sm:text-sm" dir="rtl">تبریز ، پاستور جدید ، نبش چهارراه قدک</p>
          <p className="text-xs sm:text-sm" dir="rtl">ساختمان 204 ، طبقه 1</p>
          <p className="text-sm sm:text-base md:text-lg font-semibold text-blue-400 pt-1 sm:pt-2">www.platinco.ir</p>
        </div>
      </div>
    </section>
  );
}


