const TickerBanner = ({ text = "FLUTTER DEVELOPER · CLEAN ARCHITECTURE · PLAY STORE DEPLOYED · PRODUCTION GRADE · CROSS PLATFORM · ARCHITECTURE FIRST · AI AUGMENTED · " }) => {
  const repeated = text.repeat(4);

  return (
    <div className="w-full overflow-hidden bg-primary border-y-4 border-foreground">
      <div className="flex whitespace-nowrap py-1">
        <span className="animate-marquee font-mono text-sm font-bold uppercase tracking-widest text-primary-foreground">
          {repeated}
        </span>
        <span className="animate-marquee font-mono text-sm font-bold uppercase tracking-widest text-primary-foreground" aria-hidden>
          {repeated}
        </span>
      </div>
    </div>
  );
};

export default TickerBanner;