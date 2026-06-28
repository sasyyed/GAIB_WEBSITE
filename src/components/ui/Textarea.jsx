const Textarea = ({ label, id, className = "", ...props }) => {
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-2 block text-sm font-semibold text-gaib-dark">{label}</span>
      <textarea
        id={id}
        className={`focus-ring min-h-36 w-full resize-y rounded-2xl border border-gaib-dark/10 bg-white px-4 py-3 text-gaib-dark shadow-sm transition focus:border-gaib-green ${className}`}
        {...props}
      />
    </label>
  );
};

export default Textarea;
