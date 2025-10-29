export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 transition-transform duration-100" />
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl top-1/3 -right-48 transition-transform duration-100" />
      <div className="absolute w-[900px] h-[900px] bg-teal-500/10 rounded-full blur-3xl top-2/3 left-1/4 transition-transform duration-100" />
      <div className="absolute w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl bottom-0 right-1/3 transition-transform duration-100" />
    </div>
  );
}


