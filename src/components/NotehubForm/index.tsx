import { NotehubButton } from "../NotehubButton";
import { NotehubInput } from "../NotehubInput";

export const NotehubForm = () => {
  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("form has been submitted");
  };

  return (
    <form onSubmit={handleSubmission}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <NotehubInput />
        <NotehubButton />
      </div>
    </form>
  );
};
