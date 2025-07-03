interface Props {
  text: string;
  className?: string;
}

const Badge = ({ text, className }: Props) => {
  return (
    <span
      className={
        "text-md uppercase bg-secondary text-white px-4 py-2 rounded-lg place-self-start " +
        className
      }
    >
      {text}
    </span>
  );
};

export default Badge;
