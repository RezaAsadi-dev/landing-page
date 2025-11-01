export default function ThankYouSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative">
      <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 transition-all duration-300 px-2">
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Platin</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance text-white">THANK YOU</h1>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-slate-400">FOR YOUR ATTENTION</p>
        </div>
        <div className="pt-4 sm:pt-6 md:pt-8 space-y-2 sm:space-y-3 text-slate-400">
          <p className="text-base sm:text-lg md:text-xl font-semibold">041-33363096</p>
          <p className="text-sm sm:text-base" dir="rtl">تبریز ، پاستور جدید ، نبش چهارراه قدک</p>
          <p className="text-sm sm:text-base" dir="rtl">ساختمان 204 ، طبقه 1</p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400 pt-2 sm:pt-3 md:pt-4">www.platinco.ir</p>
        </div>
      </div>
    </section>
  );
}