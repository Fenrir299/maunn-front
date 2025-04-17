import React from "react";
import { Helmet } from "react-helmet";

interface ArticleStructuredDataProps {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  url: string;
}

interface OrganizationStructuredDataProps {
  name: string;
  url: string;
  logo: string;
  description: string;
  contactPoint?: {
    telephone: string;
    email: string;
    contactType: string;
    areaServed: string;
  };
  socialLinks?: string[];
}

interface FAQStructuredDataProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export const ArticleStructuredData: React.FC<ArticleStructuredDataProps> = ({
  title,
  description,
  image = "/logo_maunn_mono_purple.svg",
  datePublished,
  dateModified,
  authorName,
  url,
}) => {
  const imageUrl = image.startsWith("http")
    ? image
    : `${window.location.origin}${image}`;
  const articleUrl = url || window.location.href;
  const modifiedDate = dateModified || datePublished;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: datePublished,
    dateModified: modifiedDate,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "MAUNN",
      logo: {
        "@type": "ImageObject",
        url: `${window.location.origin}/logo_maunn_mono_purple.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export const OrganizationStructuredData: React.FC<
  OrganizationStructuredDataProps
> = ({ name, url, logo, description, contactPoint, socialLinks }) => {
  const logoUrl = logo.startsWith("http")
    ? logo
    : `${window.location.origin}${logo}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo: logoUrl,
    description,
    ...(contactPoint && {
      contactPoint: {
        "@type": "ContactPoint",
        ...contactPoint,
      },
    }),
    ...(socialLinks && { sameAs: socialLinks }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export const FAQStructuredData: React.FC<FAQStructuredDataProps> = ({
  questions,
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
