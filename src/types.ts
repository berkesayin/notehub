export interface ContextValue {
  noteCards: NoteCard[];
  addNoteCard: (text: string) => void;
  deleteNoteCard: (id: string) => void;
  editNoteCard: (id: string, text: string) => void;
  updateNoteCardStatus: (id: string) => void;
}

export interface NoteCard {
  id: string;
  text: string;
  status: "undone" | "completed";
}

export interface NotehubCardProps {
  noteCard: NoteCard;
}
