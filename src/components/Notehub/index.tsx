import { NotehubAddNoteForm } from "../NotehubAddNoteForm";
import { NotehubList } from "../NotehubList";
import { Toaster } from "react-hot-toast";

export const Notehub = () => {
  return (
    <div>
      <Toaster position="bottom-center" />
      <NotehubAddNoteForm />
      <NotehubList />
    </div>
  );
};
