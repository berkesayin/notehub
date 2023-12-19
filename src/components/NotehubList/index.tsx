import { useNotehubContext } from "../../contexts/useNotehubContext";
import { SiStarship } from "react-icons/si";
import { INITIAL_NOTE_CARD_TEXT } from "../../constants";

export const NotehubList = () => {
  const { noteCards } = useNotehubContext();

  if (!noteCards.length) {
    return (
      <div className="max-w-lg px-5 m-auto">
        <h1 className="flex flex-col items-center gap-5 px-5 py-10 text-xl font-bold text-center rounded-xl bg-zinc-900">
          <SiStarship className="text-5xl" />
          {INITIAL_NOTE_CARD_TEXT}
        </h1>
      </div>
    );
  }

  return (
    <ul className="grid max-w-lg gap-2 px-5 m-auto">
      {noteCards.map((noteCard) => (
        <li key={noteCard}>{noteCard}</li>
      ))}
    </ul>
  );
};
