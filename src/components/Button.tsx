import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "accent";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  primary: "rounded-full bg-brand",
  accent: "rounded-[12px] bg-[rgb(255,64,0)]",
};

export default function Button({
  children,
  className = "",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`px-[18px] py-[14px] text-base font-medium text-white transition-opacity hover:opacity-90 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
