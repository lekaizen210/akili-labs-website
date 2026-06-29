export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner orange AKILI */}
        <div className="relative w-12 h-12">
          <div className="w-12 h-12 rounded-full border-4 border-[#E8F0FE]" />
          <div className="absolute inset-0 w-12 h-12 rounded-full border-4 border-transparent border-t-[#FF5500] animate-spin" />
        </div>

        {/* Dots pulsés */}
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#1A2B3C]"
              style={{
                animationName: "pulse",
                animationDuration: "1.2s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
