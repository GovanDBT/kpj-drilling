import { Link, useParams } from "react-router-dom";
import products from "../database/products";
import { ChevronRight } from "lucide-react";
import Section from "../components/Section";
import { useEffect } from "react";
import Seo from "../components/Seo";
import ModalImage from "react-modal-image";

const ProductDetails = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const productId = Number(id);
  const product = products.find((p) => p.pid === productId);

  if (!product) {
    return (
      <div>
        <header className="bg-primary text-white py-4">
          <div className="container flex gap-4 items-center">
            <Link to="/products" className="underline">
              Products
            </Link>
            <ChevronRight size={18} />
            <p className="text-base font-bold text-red-200">
              Product not found
            </p>
          </div>
        </header>
        <Section>
          <p>Sorry, we couldn't find the product you're looking for.</p>
        </Section>
      </div>
    );
  }

  return (
    <div>
      {/* SEO */}
      <Seo
        title={product.name + " | KPJ Drilling"}
        desc="We stock a wide range of reliable, high-performance drilling consumables and equipment—sourced from trusted international suppliers and tailored for Botswana's diverse drilling environments"
        keywords={product.name}
      />
      <header className="bg-primary text-white py-4">
        <div className="container flex gap-4 items-center">
          <Link to="/products" className="underline">
            Products
          </Link>
          <ChevronRight size={18} />
          <p className="text-base font-bold">{product.name}</p>
        </div>
      </header>

      <Section
        sectionClassName="!my-20"
        divClassName="flex flex-col lg:flex-row gap-6"
      >
        <img src={product.image} className="h-70 rounded-lg" />
        <div>
          <h1 className="text-2xl font-semibold mb-1">{product.name}</h1>
          <p className="text-gray-500 leading-relaxed mb-5 border-b pb-6 border-gray-300">
            {product.brief_desc}
          </p>
          <p>{product.desc}</p>
        </div>
      </Section>
      <Section sectionClassName="!mt-5 !mb-10">
        <div className="grid grid-cols-4 gap-5">
          {product.gallery?.map((item) => (
            <div>
              <ModalImage
                small={item.image}
                large={item.image}
                alt={item.name}
                className="rounded-lg cursor-pointer"
              />
              {/* <img src={item.image} className="rounded-lg cursor-sw-resize" /> */}
              <p className="text-sm text-gray-400">{item.name}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ProductDetails;
