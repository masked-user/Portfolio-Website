// src/components/ui/Button.tsx
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ghost" | "default";
  children: ReactNode;
}

export const Button = ({ variant = "default", children, ...props} : ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded ${
        variant === "ghost" ? "bg-transparent border" : "bg-blue-500"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
