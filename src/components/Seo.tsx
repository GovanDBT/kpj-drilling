import socials from "/kpj-social.jpg";

interface Props {
  title?: string;
  desc: string;
  keywords: string;
}

const Seo = ({ title = "KPJ Drilling", desc, keywords }: Props) => {
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />
      {/* Open graph for social media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={socials} />
    </head>
  );
};

export default Seo;
