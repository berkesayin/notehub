import { createContext } from "react";
import { useLocalStorage } from "usehooks-ts";
import { ContextValue, NoteCard } from "../types";
import { nanoid } from "nanoid";

export const NotehubContext = createContext<ContextValue | undefined>(
  undefined
);

export const NotehubProvider = (props: { children: React.ReactNode }) => {
  const [noteCards, setNoteCards] = useLocalStorage<NoteCard[]>(
    "noteCards",
    []
  );

  // Add new note
  const addNoteCard = (text: string) => {
    const newNoteCard: NoteCard = {
      id: nanoid(),
      text,
      status: "undone",
    };
    setNoteCards([...noteCards, newNoteCard]);
  };

  // Delete a note
  const deleteNoteCard = (id: string) => {
    setNoteCards((prevNoteCards) =>
      prevNoteCards.filter((noteCard) => noteCard.id !== id)
    );
  };

  // Edit a note
  const editNoteCard = (id: string, text: string) => {
    setNoteCards((prevNoteCards) => {
      return prevNoteCards.map((noteCard) => {
        if (noteCard.id === id) {
          return { ...noteCard, text };
        }
        return noteCard;
      });
    });
  };

  // Update status of a note
  const updateNoteCardStatus = (id: string) => {
    setNoteCards((prevNoteCards) => {
      return prevNoteCards.map((noteCard) => {
        if (noteCard.id === id) {
          return {
            ...noteCard,
            status: noteCard.status === "undone" ? "completed" : "undone",
          };
        }
        return noteCard;
      });
    });
  };

  const contextValue: ContextValue = {
    noteCards,
    addNoteCard,
    deleteNoteCard,
    editNoteCard,
    updateNoteCardStatus,
  };

  return (
    <NotehubContext.Provider value={contextValue}>
      {props.children}
    </NotehubContext.Provider>
  );
};
