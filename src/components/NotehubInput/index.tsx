import { useEffect, useRef, useState } from "react";

export const NotehubInput = () => {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <input
      type="text"
      className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl 
            placeholder:text-zinc-500 focus:border-white"
      ref={inputRef}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="start typing ..."
    />
  );
};
