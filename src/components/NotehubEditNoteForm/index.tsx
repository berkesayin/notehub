import { useEffect, useRef } from "react";
import { useNotehubContext } from "../../contexts/useNotehubContext";
import { NotehubTextArea } from "../NotehubTextArea";
import { NotehubButton } from "../NotehubButton";
import { NotehubCardProps } from "../../types";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

export const NotehubEditNoteForm = ({ noteCard }: NotehubCardProps) => {
  const { editNoteCard, editingNoteCardId } = useNotehubContext();

  const editInputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (editingNoteCardId !== null && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingNoteCardId]);

  const { editingNoteCardText, setEditingNoteCardText, setEditingNoteCardId } =
    useNotehubContext();

  const handleUpdateNoteCard = (noteCardId: string) => {
    if (editingNoteCardText.trim() !== "") {
      editNoteCard(noteCardId, editingNoteCardText);
      setEditingNoteCardId(null);
      setEditingNoteCardText("");
      toast.success("Note card updated successfully!");
    } else {
      toast.error("Note card field cannot be empty!");
    }
  };

  return (
    <motion.div layout className="flex flex-col gap-2">
      <NotehubTextArea
        className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl 
      placeholder:text-zinc-500 focus:border-white"
        ref={editInputRef}
        value={editingNoteCardText}
        onChange={(e) => setEditingNoteCardText(e.target.value)}
        placeholder="Update your note...."
      />
      <NotehubButton
        className="w-1/2 px-5 py-2 text-sm font-normal text-white bg-gray-800 border-2 border-gray-800 
        hover:bg-zinc-800 active:scale-95 rounded-xl mx-auto"
        onClick={() => handleUpdateNoteCard(noteCard.id)}
      >
        Update The Note
      </NotehubButton>
    </motion.div>
  );
};
