import { createContext, useState } from "react";
import { ContextValue } from "../types";

export const NotehubContext = createContext<ContextValue | undefined>(
  undefined
);

export const NotehubProvider = (props: { children: React.ReactNode }) => {
  const [noteCards, setNoteCards] = useState<string[]>([]);

  // Add new note
  const addNoteCard = (text: string) => {
    setNoteCards([...noteCards, text]);
  };

  const contextValue: ContextValue = {
    noteCards,
    addNoteCard,
  };

  return (
    <NotehubContext.Provider value={contextValue}>
      {props.children}
    </NotehubContext.Provider>
  );
};
