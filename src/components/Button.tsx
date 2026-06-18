import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "accent" | "light";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  primary: "rounded-full bg-brand px-[18px] py-[14px] text-base text-white cursor-pointer",
  accent:
    "rounded-[12px] bg-[rgb(255,64,0)] px-[18px] py-[14px] text-base text-white cursor-pointer",
  light:
    "inline-flex items-center gap-1 rounded-[12px] bg-white px-[18px] py-[10px] text-[14px] text-black shadow-[rgba(0,0,0,0.12)_0px_0.5px_2px_0px] cursor-pointer",
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
      className={`font-medium transition-opacity hover:opacity-90 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
