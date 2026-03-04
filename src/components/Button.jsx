const baseClasses =
  'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

const variants = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
  secondary:
    'bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-400',
  danger:
    'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
};

function Button({ variant = 'primary', className = '', disabled, ...props }) {
  const variantClasses = variants[variant] ?? variants.primary;
  const classes = `${baseClasses} ${variantClasses} ${className}`.trim();

  return <button className={classes} disabled={disabled} {...props} />;
}

export default Button;

