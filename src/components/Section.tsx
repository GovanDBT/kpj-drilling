import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  background?: string;
  sectionClassName?: string;
  divClassName?: string;
  ref?: string;
}

const Section = ({
  children,
  sectionClassName,
  divClassName,
  background = "#fff",
}: Props) => {
  return (
    <section
      className={"my-20 lg:my-30 bg-" + background + " " + sectionClassName}
    >
      <div className={"container " + divClassName}>{children}</div>
    </section>
  );
};

export default Section;
