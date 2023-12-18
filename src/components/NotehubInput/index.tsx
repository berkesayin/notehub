import { InputHTMLAttributes, forwardRef } from "react";

export const NotehubInput = forwardRef<
  HTMLInputElement, // type of the ref that will be forwarded to the underlying <input> element
  InputHTMLAttributes<HTMLInputElement> // type of the props object that the component accepts
>(({ type, className, value, onChange, placeholder }, ref) => {
  return (
    <input
      type={type}
      className={className}
      ref={ref}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
});
