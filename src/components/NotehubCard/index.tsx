import { useNotehubContext } from "../../contexts/useNotehubContext";
import { NotehubCardStatus } from "../NotehubCardStatus";
import { NotehubCardDeletion } from "../NotehubCardDeletion";
import { NotehubCardEdit } from "../NotehubCardEdit";
import { NotehubEditNoteForm } from "../NotehubEditNoteForm";
import { NotehubCardProps } from "../../types";
import { motion } from "framer-motion";
import cn from "classnames";

export const NotehubCard = ({ noteCard }: NotehubCardProps) => {
  const { editingNoteCardId } = useNotehubContext();

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
        <NotehubEditNoteForm noteCard={noteCard} />
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
            <NotehubCardStatus noteCard={noteCard} />
            <div className="flex items-center gap-2">
              <NotehubCardEdit noteCard={noteCard} />
              <NotehubCardDeletion noteCard={noteCard} />
            </div>
          </div>
        </div>
      )}
    </motion.li>
  );
};
