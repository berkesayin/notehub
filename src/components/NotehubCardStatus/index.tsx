import { useNotehubContext } from "../../contexts/useNotehubContext";
import { toast } from "react-hot-toast";
import { NotehubButton } from "../NotehubButton";
import { BsCheck2Square } from "react-icons/bs";
import { TbRefresh } from "react-icons/tb";
import { NotehubCardStatusProps } from "../../types";

export const NotehubCardStatus = ({ noteCard }: NotehubCardStatusProps) => {
  const { updateNoteCardStatus } = useNotehubContext();

  const handleUpdateNoteCardStatus = (noteCardId: string) => {
    updateNoteCardStatus(noteCardId);
    toast.success("Note card status updated successfully!");
  };
  return (
    <NotehubButton onClick={() => handleUpdateNoteCardStatus(noteCard.id)}>
      {" "}
      {noteCard.status === "undone" ? (
        <span className="flex items-center gap-1">
          <BsCheck2Square />
          Mark As Completed
        </span>
      ) : (
        <span className="flex items-center gap-1">
          <TbRefresh />
          Mark As Undone
        </span>
      )}{" "}
    </NotehubButton>
  );
};
