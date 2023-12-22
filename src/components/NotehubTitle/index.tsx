import { NotehubTitleProps } from "../../types";

export const NotehubTitle = ({ text, className }: NotehubTitleProps) => {
  return <h1 className={className}>{text}</h1>;
};
