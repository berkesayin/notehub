import { NotehubInput } from "../NotehubInput";
import { useNotehubContext } from "../../contexts/useNotehubContext";
import { NotehubCardProps } from "../../types";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { BsCheck2Square } from "react-icons/bs";
import { TbRefresh } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import cn from "classnames";

export const NotehubCard = ({ noteCard }: NotehubCardProps) => {
  const { deleteNoteCard, editNoteCard, updateNoteCardStatus } =
    useNotehubContext();

  const [editingNoteCardText, setEditingNoteCardText] = useState<string>("");
  const [editingNoteCardId, setEditingNoteCardId] = useState<string | null>(
    null
  );

  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingNoteCardId !== null && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingNoteCardId]);

  const handleEdit = (noteCardId: string, noteCardText: string) => {
    setEditingNoteCardId(noteCardId);
    setEditingNoteCardText(noteCardText);

    if (editInputRef.current) {
      editInputRef.current.focus();
    }
  };

  const handleDeleteNoteCard = (noteCardId: string) => {
    deleteNoteCard(noteCardId);
    toast.success("Note card deleted successfully");
  };

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

  const handleUpdateNoteCardStatus = (noteCardId: string) => {
    updateNoteCardStatus(noteCardId);
    toast.success("Note card status updated successfully!");
  };

  return (
    <motion.li
      layout
      key={noteCard.id}
      className={cn(
        "p-5 rounded-xl bg-zinc-900",
        noteCard.status === "completed" && "bg-opacity-50 text-zinc-500"
      )}
    >
      {editingNoteCardId === noteCard.id ? (
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
          <button
            className="px-5 py-2 text-sm font-normal text-orange-300 bg-orange-900 border-2 
              border-orange-900 active:scale-95 rounded-xl"
            onClick={() => handleUpdateNoteCard(noteCard.id)}
          >
            Update
          </button>
        </motion.div>
      ) : (
        <div className="flex flex-col gap-5">
          <motion.span
            layout
            style={{
              textDecoration:
                noteCard.status === "completed" ? "line-through" : "none",
            }}
          >
            {noteCard.text}
          </motion.span>
          <div className="flex justify-between gap-5 text-white">
            <button onClick={() => handleUpdateNoteCardStatus(noteCard.id)}>
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
              )}
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleEdit(noteCard.id, noteCard.text)}
                className="flex items-center gap-1 "
              >
                <FaRegEdit />
                Edit
              </button>
              <button
                onClick={() => handleDeleteNoteCard(noteCard.id)}
                className="flex items-center gap-1 text-red-500"
              >
                <RiDeleteBin7Line />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.li>
  );
};
