import { NotehubButtonProps } from "../../types";

export const NotehubButton = ({
  type,
  className,
  onClick,
  children,
}: NotehubButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
