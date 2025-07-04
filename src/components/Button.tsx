/**
 * custom button component
 */
import { ArrowUpRight } from "lucide-react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "white";
  className?: string;
}

const Button = ({ children, className, color = "primary" }: Props) => {
  return (
    <button
      className={
        `bg-${color} ${
          color === "white"
            ? "text-primary hover:bg-secondary hover:text-white"
            : "text-white"
        } capitalize flex gap-2 px-6 py-3 rounded-3xl cursor-pointer hover:bg-secondary transition duration-300 ease-in-out group text-nowrap text-lg ` +
        className
      }
    >
      {children}
      <ArrowUpRight
        className="transition duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        size={20}
      />
    </button>
  );
};

export default Button;
