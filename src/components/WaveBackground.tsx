const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Wave 1 */}
      <svg
        className="absolute bottom-0 left-0 w-full h-48 md:h-64 animate-wave"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="hsl(195 75% 50% / 0.3)"
          d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,218.7C672,213,768,171,864,154.7C960,139,1056,149,1152,165.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      
      {/* Wave 2 */}
      <svg
        className="absolute bottom-0 left-0 w-full h-40 md:h-56 animate-wave-slow"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ animationDelay: "-2s" }}
      >
        <path
          fill="hsl(185 70% 45% / 0.2)"
          d="M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,261.3C672,277,768,267,864,234.7C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      
      {/* Wave 3 */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 md:h-48"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="hsl(var(--background))"
          d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default WaveBackground;
