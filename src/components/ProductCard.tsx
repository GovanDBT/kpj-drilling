import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  name: string;
  description: string;
  image: string;
}

const ProductCard = ({ name, description, id, image }: Props) => {
  return (
    <Link to={"/products/" + id} className="flex cursor-pointer">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-98 h-80 rounded overflow-hidden grow relative"
      >
        <div className="bg-linear-to-t from-primary to-white/0 h-full p-3 text-white flex flex-col place-content-end translate-y-20 hover:translate-y-0 transition duration-150 ease-in-out">
          <div className="flex justify-between">
            <h3 className="line-clamp-2 grow-7 capitalize">{name}</h3>
            <ArrowUpRight className="basis-15" />
          </div>
          <p className="text-base mb-6 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
