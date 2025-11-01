export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-blue-500/10 rounded-full blur-3xl -top-24 sm:-top-36 md:-top-48 -left-24 sm:-left-36 md:-left-48 transition-transform duration-100" />
      <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] bg-cyan-500/10 rounded-full blur-3xl top-1/3 -right-24 sm:-right-36 md:-right-48 transition-transform duration-100" />
      <div className="absolute w-[450px] h-[450px] sm:w-[675px] sm:h-[675px] md:w-[900px] md:h-[900px] bg-teal-500/10 rounded-full blur-3xl top-2/3 left-1/4 transition-transform duration-100" />
      <div className="absolute w-[250px] h-[250px] sm:w-[375px] sm:h-[375px] md:w-[500px] md:h-[500px] bg-blue-400/5 rounded-full blur-3xl bottom-0 right-1/3 transition-transform duration-100" />
    </div>
  );
}


