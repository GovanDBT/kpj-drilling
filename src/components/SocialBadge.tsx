import { FaFacebook } from "react-icons/fa6";

const SocialBadge = () => {
  return (
    <a
      className="bg-[#1877F2] flex gap-4 items-center justify-center py-5 px-7 rounded-xl w-fit mx-auto hover:scale-110 transition duration-500 ease-in-out"
      href="https://www.facebook.com/kpjdrillingbotswana"
      target="_blank"
    >
      <FaFacebook size={45} />
      <div className="text-left">
        <p className="uppercase text-[10px] font-light">Facebook</p>
        <p className="font-bold text-[18px]">KPJ Drilling</p>
      </div>
    </a>
  );
};

export default SocialBadge;
