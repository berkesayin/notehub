import { Toaster } from "react-hot-toast";
import { CreateNote } from "../CreateNote";
import { NoteList } from "../NoteList";

export const Notehub = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">NoteHub - Keep Your Notes!</h1>
      <Toaster position="bottom-center" />
      <CreateNote />
      <NoteList />
    </div>
  );
};
