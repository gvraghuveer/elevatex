export default function DashboardLoading() {
  return (
    <div className="w-full h-full animate-in fade-in duration-1000">
      <div className="flex justify-between items-end mb-10">
        <div className="space-y-3">
          <div className="h-8 w-64 bg-white/5 rounded-lg animate-pulse" />
          <div className="h-4 w-96 bg-white/5 rounded-lg animate-pulse" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="glass h-40 rounded-[32px] border border-white/5 animate-pulse" />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass h-96 rounded-[32px] border border-white/5 animate-pulse" />
        <div className="glass h-96 rounded-[32px] border border-white/5 animate-pulse" />
      </div>
    </div>
  );
}
