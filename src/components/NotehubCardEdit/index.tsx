import { useRef } from "react";
import { useNotehubContext } from "../../contexts/useNotehubContext";
import { NotehubButton } from "../NotehubButton";
import { NotehubCardEditProps } from "../../types";
import { FaRegEdit } from "react-icons/fa";

export const NotehubCardEdit = ({ noteCard }: NotehubCardEditProps) => {
  const { setEditingNoteCardText, setEditingNoteCardId } = useNotehubContext();

  const editInputRef = useRef<HTMLInputElement>(null);

  const handleEdit = (noteCardId: string, noteCardText: string) => {
    setEditingNoteCardId(noteCardId);
    setEditingNoteCardText(noteCardText);

    if (editInputRef.current) {
      editInputRef.current.focus();
    }
  };
  return (
    <NotehubButton
      onClick={() => handleEdit(noteCard.id, noteCard.text)}
      className="flex items-center gap-1"
    >
      {" "}
      <FaRegEdit />
      Edit
    </NotehubButton>
  );
};
