import { Link } from "react-router-dom";
import Button from "./Button";

interface Props {
  sectionClassName?: String;
  containerClassName?: String;
}

const Callout = ({ sectionClassName, containerClassName }: Props) => {
  return (
    <section className={"bg-[#0f3e75] " + sectionClassName}>
      <div
        className={
          "container flex lg:flex-row flex-col justify-between items-center gap-10 py-10 " +
          containerClassName
        }
      >
        <div className="text-white text-center lg:text-left">
          <h2 className="text-4xl/normal lg:text-5xl/normal">
            Request A Quote
          </h2>
          <p className="text-2xl/normal lg:text-xl/normal">
            Get a Customized Quote for Your Drilling Needs Today!
          </p>
        </div>
        <Link to="/products">
          <Button color="white">view all products</Button>
        </Link>
      </div>
    </section>
  );
};

export default Callout;
