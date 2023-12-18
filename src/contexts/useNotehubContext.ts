import { useContext } from "react";
import { NotehubContext } from "./NotehubContext";

export const useNotehubContext = () => {
  const context = useContext(NotehubContext);

  if (!context) {
    throw new Error("useNotehubContext must be used within NotehubProvider");
  }

  return context;
};
