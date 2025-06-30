// components/BlackHoleLoader.jsx
export default function BlackHoleLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="relative w-40 h-40">
        {/* Rotating ring */}
        <div className="absolute inset-0 rounded-full border-[6px] border-yellow-400 border-t-transparent animate-spin"></div>

        {/* Inner core (black hole center) */}
        <div className="absolute inset-6 bg-black rounded-full flex items-center justify-center shadow-[0_0_60px_#FFD70088]">
          <div className="w-6 h-6 bg-yellow-400 rounded-full animate-ping opacity-80" />
        </div>
      </div>

      {/* Optional loading text */}
      <p className="absolute bottom-10 text-yellow-400 font-orbitron text-sm tracking-widest animate-pulse">
        Entering Wormhole...
      </p>
    </div>
  );
}
