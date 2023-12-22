import { NotehubAddNoteForm } from "../NotehubAddNoteForm";
import { NotehubList } from "../NotehubList";
import { Toaster } from "react-hot-toast";
import { NotehubNavbar } from "../NotehubNavbar";

export const Notehub = () => {
  return (
    <div>
      <Toaster position="bottom-center" />
      <NotehubNavbar />
      <NotehubAddNoteForm />
      <NotehubList />
    </div>
  );
};
