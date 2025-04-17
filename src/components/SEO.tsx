import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  twitterCard?: string;
  published?: string;
  modified?: string;
  author?: string;
  section?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "MAUNN - The desire to change technology",
  description = "MAUNN est l'architecte des grandes transformations des entreprises. Nous mettons en relations nos experts avec nos partenaires.",
  keywords = "transformation numérique, MAUNN, technologies, consulting, expertise IT",
  image = "/logo_maunn_mono_purple.svg",
  url = "https://www.maunn.fr",
  type = "website",
  twitterCard = "summary_large_image",
  published,
  modified,
  author = "MAUNN",
  section,
  noindex = false,
}) => {
  // Construit l'URL complète pour l'image
  const imageUrl = image.startsWith("http")
    ? image
    : `${window.location.origin}${image}`;
  // Construit l'URL canonique
  const canonical = url || window.location.href;

  return (
    <Helmet>
      {/* Balises meta de base */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Gestion de l'indexation */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* URL canonique */}
      <link rel="canonical" href={canonical} />

      {/* Balises Open Graph pour les réseaux sociaux */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="MAUNN" />

      {/* Balises Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Balises pour les articles (si applicable) */}
      {published && (
        <meta property="article:published_time" content={published} />
      )}
      {modified && <meta property="article:modified_time" content={modified} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}

      {/* Langue du document */}
      <html lang="fr" />
    </Helmet>
  );
};

export default SEO;
