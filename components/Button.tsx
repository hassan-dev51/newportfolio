import { experimental_useFormStatus as useFormStatus } from "react-dom";

const Button = () => {
  const { pending } = useFormStatus();
  return (
    <div>
      <button
        aria-disabled={pending}
        className="w-full rounded-md bg-[#2493d4] p-3 text-[#ffffff] hover:border hover:border-[#2493d4] hover:bg-transparent"
      >
        {pending ? "Sending ...." : "Send"}
      </button>
    </div>
  );
};

export default Button;
