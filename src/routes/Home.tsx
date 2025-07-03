import heroImage from "/landing-image.jpg";
import aboutImage from "/about-img.jpg";
import Badge from "../components/Badge";
import Button from "../components/Button";

const Home = () => {
  return (
    <main>
      <header>
        <img src={heroImage} alt="" />
      </header>
      <section className="grid grid-cols-2 container mx-auto my-20 items-center">
        <img src={aboutImage} alt="" />
        <div className="flex flex-col space-y-8">
          <Badge text="About Us" />
          <div>
            <h2>KPJ drilling (Pty) Ltd</h2>
            <p>
              KPJ Drilling (Pty) Ltd is a supplier of drilling consumables for
              the drilling industry, not only borehole drilling but also
              exploration drilling. Since its establishment in September 2001,
              KPJ Drilling has supplied consumables and equipment for many of
              the Batswana drillers carrying out varying projects throughout
              Botswana.
            </p>
          </div>
          <Button>read more</Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
