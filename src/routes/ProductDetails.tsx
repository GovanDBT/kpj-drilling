import { Link, useParams } from "react-router-dom";
import products from "../database/products";
import { ChevronRight } from "lucide-react";
import Section from "../components/Section";
import { useEffect } from "react";

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
      <header className="bg-primary text-white py-4">
        <div className="container flex gap-4 items-center">
          <Link to="/products" className="underline">
            Products
          </Link>
          <ChevronRight size={18} />
          <p className="text-base font-bold">{product.name}</p>
        </div>
      </header>

      <Section sectionClassName="!my-20" divClassName="flex gap-6">
        <img src={product.image} className="h-70" />
        <div>
          <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>
      </Section>
    </div>
  );
};

export default ProductDetails;
