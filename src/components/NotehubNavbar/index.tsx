import { NotehubButton } from "../NotehubButton";

export const NotehubNavbar = () => {
  return (
    <nav className="bg-zinc-900 rounded-xl p-5 mx-5 my-1">
      <div className="flex justify-between items-center">
        <NotehubButton className="text-white text-lg font-bold tracking-widest">
          NOTEHUB
        </NotehubButton>
        <div className="flex space-x-3">
          <NotehubButton className="bg-gray-800 rounded-xl p-3 tracking-wider">
            Notes Completed
          </NotehubButton>
          <NotehubButton className="bg-gray-700 rounded-xl p-3 tracking-wider">
            Notes Undone
          </NotehubButton>
        </div>
      </div>
    </nav>
  );
};
