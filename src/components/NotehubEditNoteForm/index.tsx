import { useEffect, useRef } from "react";
import { useNotehubContext } from "../../contexts/useNotehubContext";
import { NotehubInput } from "../NotehubInput";
import { NotehubButton } from "../NotehubButton";
import { NotehubCardProps } from "../../types";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

export const NotehubEditNoteForm = ({ noteCard }: NotehubCardProps) => {
  const { editNoteCard, editingNoteCardId } = useNotehubContext();

  const editInputRef = useRef<HTMLInputElement>(null);

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
    <motion.div layout className="flex gap-2">
      <NotehubInput
        type="text"
        className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl 
            placeholder:text-zinc-500 focus:border-white"
        ref={editInputRef}
        value={editingNoteCardText}
        onChange={(e) => setEditingNoteCardText(e.target.value)}
        placeholder="Update your note...."
      />
      <NotehubButton
        className="px-5 py-2 text-sm font-normal text-orange-300 bg-orange-900 border-2 
              border-orange-900 active:scale-95 rounded-xl"
        onClick={() => handleUpdateNoteCard(noteCard.id)}
      >
        Update
      </NotehubButton>
    </motion.div>
  );
};
