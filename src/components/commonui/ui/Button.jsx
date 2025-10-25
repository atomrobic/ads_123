const Button = ({ children, variant = 'primary', size = 'md', onClick, className = '' }) => {
  const baseStyles = 'rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg';
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg'
  };
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:from-blue-700 hover:to-purple-700',
    secondary: 'bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:shadow-2xl',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm',
    glass: 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30'
  };
  
  return (
    <button 
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;