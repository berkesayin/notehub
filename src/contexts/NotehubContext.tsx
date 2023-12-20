import { createContext, useState } from "react";
import { ContextValue, NoteCard } from "../types";
import { nanoid } from "nanoid";

export const NotehubContext = createContext<ContextValue | undefined>(
  undefined
);

export const NotehubProvider = (props: { children: React.ReactNode }) => {
  const [noteCards, setNoteCards] = useState<NoteCard[]>([]);

  // Add new note
  const addNoteCard = (text: string) => {
    const newNoteCard: NoteCard = {
      id: nanoid(),
      text,
      status: "undone",
    };
    setNoteCards([...noteCards, newNoteCard]);
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
