import { FaRegEdit } from "react-icons/fa";
import { NotehubButton } from "../NotehubButton";
import { useNotehubContext } from "../../contexts/useNotehubContext";
import { useRef } from "react";
import { NotehubCardEditProps } from "../../types";

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
