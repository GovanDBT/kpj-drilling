import Button from "./Button";
import Section from "./Section";

interface Props {
  className?: String;
}

const Callout = ({ className }: Props) => {
  return (
    <Section
      background="primary"
      sectionClassName={"py-10 !mt-0 !mb-0 " + className}
      divClassName="flex lg:flex-row flex-col justify-between items-center gap-10"
    >
      <div className="text-white text-center lg:text-left">
        <h2 className="text-5xl">Request A Quote</h2>
        <p className="text-2xl/normal lg:text-xl/normal">
          Get a Customized Quote for Your Drilling Needs Today!
        </p>
      </div>
      <Button color="white">view all products</Button>
    </Section>
  );
};

export default Callout;
