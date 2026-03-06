import type { ButtonHTMLAttributes, FC } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-600',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:outline-gray-400',
};

const Button: FC<ButtonProps> = ({ variant = 'primary', className = '', ...props }) => {
  return (
    <button
      className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
};

export default Button;
