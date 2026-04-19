export default function Loading() {
  return (
    <div className="min-h-screen bg-[#06080A] flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary/20 rounded-full animate-pulse" />
        <div className="absolute inset-0 w-16 h-16 border-t-4 border-primary rounded-full animate-spin" />
        <div className="mt-8 text-[10px] font-black uppercase tracking-[0.4em] text-primary text-center">
          Loading Data
        </div>
      </div>
    </div>
  );
}
