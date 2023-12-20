import { RiDeleteBin7Line } from "react-icons/ri";
import { NotehubButton } from "../NotehubButton";
import { useNotehubContext } from "../../contexts/useNotehubContext";
import { toast } from "react-hot-toast";
import { NotehubCardDeletionProps } from "../../types";

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
