interface LogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
}

export default function Logo({ className = "w-8 h-8", showText = true, textClassName = "text-xl font-bold gradient-text" }: LogoProps) {
  return (
    <div className="flex items-center space-x-2">
      {/* Kovio Logo - Modern K with geometric shapes */}
      <svg 
        className={className} 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>
        
        {/* Background circle with gradient */}
        <circle cx="20" cy="20" r="18" fill="url(#logo-gradient)" opacity="0.15" />
        
        {/* Stylized K letter */}
        <path 
          d="M12 10 L12 30 M12 20 L28 10 M12 20 L28 30" 
          stroke="url(#logo-gradient)" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Accent dots */}
        <circle cx="29" cy="10" r="2" fill="#0ea5e9" />
        <circle cx="29" cy="30" r="2" fill="#d946ef" />
      </svg>
      
      {showText && (
        <span className={textClassName}>Kovio</span>
      )}
    </div>
  );
}

