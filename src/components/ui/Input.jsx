const Input = ({ label, id, className = "", ...props }) => {
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-2 block text-sm font-semibold text-gaib-dark">{label}</span>
      <input
        id={id}
        className={`focus-ring min-h-12 w-full rounded-2xl border border-gaib-dark/10 bg-white px-4 text-gaib-dark shadow-sm transition focus:border-gaib-green ${className}`}
        {...props}
      />
    </label>
  );
};

export default Input;
