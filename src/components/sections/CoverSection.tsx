export default function CoverSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative">
      <div className="text-center space-y-8 transition-all duration-300">
        <div className="inline-block">
          <div className="text-6xl md:text-8xl font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Platin
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-balance text-white">FARSIFLOW</h1>
          <p className="text-2xl md:text-3xl text-slate-400">VOICE TO TEXT</p>
        </div>
        <div className="pt-8 space-y-2 text-slate-400">
          <p className="text-lg">041-33363096</p>
          <p className="text-sm" dir="rtl">تبریز ، پاستور جدید ، نبش چهارراه قدک</p>
          <p className="text-sm" dir="rtl">ساختمان 204 ، طبقه 1</p>
          <p className="text-lg font-semibold text-blue-400">www.platinco.ir</p>
        </div>
      </div>
    </section>
  );
}


