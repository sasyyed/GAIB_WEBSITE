const Badge = ({ children, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-gaib-green/15 bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-gaib-green ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
