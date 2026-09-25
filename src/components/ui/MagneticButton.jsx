const MagneticButton = ({ children, className = "", onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
