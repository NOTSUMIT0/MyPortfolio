import useOnScreen from "../../hooks/useOnScreen";

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 cubic-bezier(0.2, 0.65, 0.3, 0.9) ${
        isVisible
          ? "opacity-100 translate-y-0 blur-0 scale-100"
          : "opacity-0 translate-y-8 blur-sm scale-95"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
