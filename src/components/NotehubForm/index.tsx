import { useEffect, useRef, useState } from "react";
import { NotehubButton } from "../NotehubButton";
import { NotehubInput } from "../NotehubInput";

export const NotehubForm = () => {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("form has been submitted");
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
