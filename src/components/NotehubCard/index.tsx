import { NotehubCardProps } from "../../types";
import { motion } from "framer-motion";
import cn from "classnames";

export const NotehubCard = ({ noteCard }: NotehubCardProps) => {
  return (
    <motion.li
      layout
      className={cn(
        "p-5 rounded-xl bg-zinc-900",
        noteCard.status === "completed" && "bg-opacity-50 text-zinc-500"
      )}
    >
      <motion.span
        layout
        style={{
          textDecoration:
            noteCard.status === "completed" ? "line-through" : "none",
        }}
      >
        {noteCard.text}
      </motion.span>
    </motion.li>
  );
};
