import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import products from "../database/products";
import { motion } from "motion/react";
import Seo from "../components/Seo";

const ProductsPage = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* SEO */}
      <Seo
        title="Products | KPJ Drilling"
        desc="We stock a wide range of reliable, high-performance drilling consumables and equipment—sourced from trusted international suppliers and tailored for Botswana's diverse drilling environments"
        keywords="Drilling equipments, DTH equipments, Drilling fluids and additives, Core storage, Geological and consumables, Coring equipment "
      />
      {/* About header section */}
      <header className="bg-primary py-6">
        <div className="container">
          <motion.div
            initial={{ transform: "translateY(30px)", opacity: 0 }}
            animate={{
              transform: "translateY(0px)",
              opacity: 100,
            }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 2 }}
            className="text-white"
          >
            <h1>Our Products</h1>
            <p>
              At KPJ Drilling (Pty) Ltd, we stock a wide range of reliable,
              high-performance drilling consumables and equipment—sourced from
              trusted international suppliers and tailored for Botswana's
              diverse drilling environments. Explore our product categories
              below to learn more about each item and find what best suits your
              project needs.
            </p>
          </motion.div>
        </div>
      </header>
      {products.length > 0 && (
        <Section
          sectionClassName="!my-20"
          divClassName="grid lg:grid-cols-3 gap-y-10 gap-x-8 justify-items-center grow"
        >
          {products.map((item) => (
            <ProductCard
              key={item.pid}
              name={item.name}
              description={item.brief_desc}
              image={item.image}
              id={item.pid}
            />
          ))}
        </Section>
      )}

      {products.length == 0 && (
        <Section sectionClassName="!my-20">
          <p className="text-center">Sorry, we couldn't find any Products</p>
        </Section>
      )}
    </div>
  );
};

export default ProductsPage;
