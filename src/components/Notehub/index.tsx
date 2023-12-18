import { Toaster } from "react-hot-toast";
import { NotehubList } from "../NotehubList";
import { NotehubForm } from "../NotehubForm";

export const Notehub = () => {
  return (
    <div>
      <Toaster position="bottom-center" />
      <NotehubForm />
      <NotehubList />
    </div>
  );
};
