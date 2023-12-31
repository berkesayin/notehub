import { createContext, useState } from "react";
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
  const [editingNoteCardText, setEditingNoteCardText] = useState<string>("");
  const [editingNoteCardId, setEditingNoteCardId] = useState<string | null>(
    null
  );

  const addNoteCard = (text: string) => {
    const newNoteCard: NoteCard = {
      id: nanoid(),
      text,
      status: "undone",
    };
    setNoteCards([...noteCards, newNoteCard]);
  };

  const deleteNoteCard = (id: string) => {
    setNoteCards((prevNoteCards) =>
      prevNoteCards.filter((noteCard) => noteCard.id !== id)
    );
  };

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
    editingNoteCardText,
    setEditingNoteCardText,
    editingNoteCardId,
    setEditingNoteCardId,
  };

  return (
    <NotehubContext.Provider value={contextValue}>
      {props.children}
    </NotehubContext.Provider>
  );
};
