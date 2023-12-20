export interface ContextValue {
  noteCards: NoteCard[];
  addNoteCard: (text: string) => void;
}

export interface NoteCard {
  id: string;
  text: string;
  status: "undone" | "completed";
}

export interface NotehubCardProps {
  noteCard: NoteCard;
}
