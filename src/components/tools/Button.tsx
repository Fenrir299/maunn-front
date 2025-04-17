import React from "react";
import { Link } from "react-router-dom";

export interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
}) => {
  const baseStyles =
    "font-semibold rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variantStyles = {
    primary:
      "bg-secondary text-white shadow-sm hover:opacity-60 focus-visible:outline-secondary",
    secondary:
      "bg-white text-secondary shadow-sm hover:opacity-60 focus-visible:outline-secondary",
    outline:
      "border border-secondary text-secondary hover:text-white hover:bg-secondary",
  };

  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-xl px-6 py-2",
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (disabled) {
    return (
      <button
        type={type}
        className={`${buttonClasses} opacity-50 cursor-not-allowed`}
        disabled
      >
        {children}
      </button>
    );
  }

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
