import { useEffect, useRef, useState } from "react";
import { useNotehubContext } from "../../contexts/useNotehubContext";
import { NotehubButton } from "../NotehubButton";
import { NotehubTextArea } from "../NotehubTextArea";
import { toast } from "react-hot-toast";

export const NotehubAddNoteForm = () => {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { addNoteCard } = useNotehubContext();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim() !== "") {
      addNoteCard(input);
      setInput("");
      toast.success("New note added successfully!");
    } else {
      toast.error("Form input cannot be empty!");
    }
  };

  return (
    <form onSubmit={handleSubmission}>
      <div className="flex flex-col items-center w-full max-w-lg gap-2 p-5 m-auto">
        <NotehubTextArea
          className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl
      placeholder:text-zinc-500 focus:border-white"
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="start typing ..."
        />
        <NotehubButton
          type="submit"
          className="px-6 py-2 text-sm font-normal text-white bg-zinc-600 border-2 border-zinc-600 hover:bg-zinc-900
            active:scale-95 rounded-xl"
        >
          Add New Note
        </NotehubButton>
      </div>
    </form>
  );
};
