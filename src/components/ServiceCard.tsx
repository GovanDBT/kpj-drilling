interface Props {
  img: string;
  imgAlt: string;
  text: string;
}

const ServiceCard = ({ img, imgAlt, text }: Props) => {
  return (
    <div className="bg-primary flex flex-col place-items-center justify-center gap-5 p-8 h-60 rounded-xl max-w-100">
      <img src={img} alt={imgAlt} />
      <p className="text-white text-2xl lg:text-xl font-medium text-center lg:max-w-50 capitalize">
        {text}
      </p>
    </div>
  );
};

export default ServiceCard;
