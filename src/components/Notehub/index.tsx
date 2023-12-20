import { Toaster } from "react-hot-toast";
import { NotehubList } from "../NotehubList";
import { NotehubAddNoteForm } from "../NotehubAddNoteForm";

export const Notehub = () => {
  return (
    <div>
      <Toaster position="bottom-center" />
      <NotehubAddNoteForm />
      <NotehubList />
    </div>
  );
};
