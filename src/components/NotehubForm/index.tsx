import { useEffect, useRef, useState } from "react";
import { NotehubButton } from "../NotehubButton";
import { NotehubInput } from "../NotehubInput";
import { useNotehubContext } from "../../contexts/useNotehubContext";
import { toast } from "react-hot-toast";

export const NotehubForm = () => {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { addNoteCard } = useNotehubContext();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("form has been submitted");
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
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <NotehubInput
          type="text"
          className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl 
            placeholder:text-zinc-500 focus:border-white"
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="start typing ..."
        />
        <NotehubButton />
      </div>
    </form>
  );
};
