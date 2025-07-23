import socials from "/kpj-social.jpg";
import logo from "/kpj-logo.png";

interface Props {
  title?: string;
  desc: string;
  keywords: string;
  type?: string;
}

const Seo = ({
  title = "KPJ Drilling",
  desc,
  keywords,
  type = "Organization",
}: Props) => {
  // Schema Markup JSON-LD
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": { type },
    name: "KPJ Drilling",
    url: "https://kpjdrilling.co.bw",
    logo: logo,
    description: desc,
    sameAs: ["https://www.facebook.com/kpjdrillingbotswana"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+2673190837",
      contactType: "Customer Service",
      areaServed: "BW",
      availableLanguage: "English",
    },
  };

  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />
      {/* Open graph for social media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={socials} />
      {/* Schema Markup JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
    </head>
  );
};

export default Seo;
