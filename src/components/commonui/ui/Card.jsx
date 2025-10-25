const Card = ({ 
  children, 
  className = '', 
  gradient = false,
  hover = true,
  padding = 'md',
  borderRadius = '2xl',
  shadow = 'xl',
  ...props 
}) => {
  // Padding sizes
  const paddingSizes = {
    none: '',
    sm: 'p-4',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-10'
  };

  // Border radius options
  const borderRadiusSizes = {
    none: '',
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl'
  };

  // Shadow sizes
  const shadowSizes = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };

  const baseClasses = `
    ${borderRadiusSizes[borderRadius]}
    ${shadowSizes[shadow]}
    ${paddingSizes[padding]}
    bg-white
    border border-gray-100
    transition-all duration-300
  `;

  const hoverClasses = hover ? `
    hover:shadow-2xl
    hover:-translate-y-1
    hover:border-gray-200
  ` : '';

  const gradientClasses = gradient ? 
    'bg-gradient-to-br from-white via-gray-50 to-gray-100' : 
    'bg-white';

  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;