export interface ContextValue {
  noteCards: NoteCard[];
  addNoteCard: (text: string) => void;
  deleteNoteCard: (id: string) => void;
  editNoteCard: (id: string, text: string) => void;
  updateNoteCardStatus: (id: string) => void;
  editingNoteCardText: string;
  setEditingNoteCardText: React.Dispatch<React.SetStateAction<string>>;
  editingNoteCardId: string | null;
  setEditingNoteCardId: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface NoteCard {
  id: string;
  text: string;
  status: "undone" | "completed";
}

export interface NotehubButtonProps {
  type?: "submit";
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export interface NotehubTitleProps {
  text: string;
  className: string;
}

export interface NotehubCardProps {
  noteCard: NoteCard;
}

export interface NotehubCardStatusProps {
  noteCard: NoteCard;
}

export interface NotehubCardDeletionProps {
  noteCard: NoteCard;
}

export interface NotehubCardEditProps {
  noteCard: NoteCard;
}
