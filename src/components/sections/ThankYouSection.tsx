export default function ThankYouSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative">
      <div className="text-center space-y-12 transition-all duration-300">
        <div className="space-y-4">
          <div className="text-6xl md:text-8xl font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Platin</div>
          <h1 className="text-5xl md:text-7xl font-bold text-balance text-white">THANK YOU</h1>
          <p className="text-2xl md:text-3xl text-slate-400">FOR YOUR ATTENTION</p>
        </div>
        <div className="pt-8 space-y-3 text-slate-400">
          <p className="text-xl font-semibold">041-33363096</p>
          <p className="text-base" dir="rtl">تبریز ، پاستور جدید ، نبش چهارراه قدک</p>
          <p className="text-base" dir="rtl">ساختمان 204 ، طبقه 1</p>
          <p className="text-2xl font-bold text-blue-400 pt-4">www.platinco.ir</p>
        </div>
      </div>
    </section>
  );
}