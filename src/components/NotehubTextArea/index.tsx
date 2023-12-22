import { TextareaHTMLAttributes, forwardRef } from "react";

export const NotehubTextArea = forwardRef<
  HTMLTextAreaElement, // type of the ref that will be forwarded to the underlying <textarea> element
  TextareaHTMLAttributes<HTMLTextAreaElement> // type of the props object that the component accepts
>(({ className, value, onChange, placeholder }, ref) => {
  return (
    <textarea
      className={className}
      ref={ref}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
});
