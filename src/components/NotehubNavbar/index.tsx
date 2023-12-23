import { NotehubButton } from "../NotehubButton";
import { NotehubTitle } from "../NotehubTitle";

export const NotehubNavbar = () => {
  return (
    <nav className="bg-zinc-900 rounded-xl p-5 mx-4 my-1">
      <div className="flex justify-between items-center">
        <NotehubButton className="text-white text-lg font-bold tracking-widest">
          NOTEHUB
        </NotehubButton>
        <NotehubTitle
          className="text-2xl font-bold tracking-wider"
          text="Keep Your Notes"
        />
        <NotehubButton className="bg-gray-800 rounded-xl p-3 tracking-wider">
          Notes Undone
        </NotehubButton>
      </div>
    </nav>
  );
};
