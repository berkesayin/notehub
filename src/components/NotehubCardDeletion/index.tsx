import { useNotehubContext } from "../../contexts/useNotehubContext";
import { NotehubButton } from "../NotehubButton";
import { NotehubCardDeletionProps } from "../../types";
import { toast } from "react-hot-toast";
import { RiDeleteBin7Line } from "react-icons/ri";

export const NotehubCardDeletion = ({ noteCard }: NotehubCardDeletionProps) => {
  const { deleteNoteCard } = useNotehubContext();

  const handleDeleteNoteCard = (noteCardId: string) => {
    deleteNoteCard(noteCardId);
    toast.success("Note card deleted successfully");
  };
  return (
    <NotehubButton
      onClick={() => handleDeleteNoteCard(noteCard.id)}
      className="flex items-center gap-1 text-red-500"
    >
      {" "}
      <RiDeleteBin7Line />
      Delete
    </NotehubButton>
  );
};
