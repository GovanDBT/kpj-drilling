import { ArrowUpRight } from "lucide-react";

interface Props {
  children: string;
}

const Button = ({ children }: Props) => {
  return (
    <button className="place-self-start bg-primary text-white capitalize flex gap-2 px-6 py-3 rounded-3xl items-center cursor-pointer hover:bg-secondary transition duration-300 ease-in-out group">
      {children}
      <ArrowUpRight
        className="transition duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        size={20}
      />
    </button>
  );
};

export default Button;
