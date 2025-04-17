import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import articlesData from "./data/ArticlesData";
import { ArticleStructuredData } from "./StructuredData";
import SEO from "./SEO";

interface BlogPostProps {
  articleId: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ articleId }) => {
  const [markdown, setMarkdown] = useState<string>("");
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    const foundArticle = articlesData.find((a) => a.id === articleId);
    if (foundArticle) {
      setArticle(foundArticle);

      fetch(`/content/blog/${foundArticle.fileName}`)
        .then((response) => response.text())
        .then((text) => setMarkdown(text))
        .catch((error) => {
          console.error("Erreur lors du chargement de l'article:", error);
        });
    }
  }, [articleId]);

  const renderers = {
    h1: ({ children }: any) => (
      <h1 className="text-2xl dark:text-white font-noto uppercase font-bold">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-lg py-4 dark:text-white font-noto uppercase font-bold">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-lg font-bold dark:text-white">{children}</h3>
    ),
    p: ({ children }: any) => (
      <p className="text-base dark:text-white leading-relaxed my-4">
        {children}
      </p>
    ),
    ul: ({ children }: any) => (
      <ul className="list-disc list-inside dark:text-white my-4">{children}</ul>
    ),
    ol: ({ children }: any) => (
      <ol className="list-decimal list-inside dark:text-white my-4">
        {children}
      </ol>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic dark:text-white my-4">
        {children}
      </blockquote>
    ),
    a: ({ href, children }: any) => (
      <a
        href={href}
        className="text-secondary hover:underline"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    img: ({ src, alt }: any) => (
      <img
        src={src}
        alt={alt || "Image de l'article"}
        className="max-w-full h-auto my-4 rounded-lg"
        loading="lazy"
      />
    ),
    code: ({ children, className }: any) => (
      <code
        className={`${className || ""} bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded`}
      >
        {children}
      </code>
    ),
    pre: ({ children }: any) => (
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 overflow-x-auto rounded-lg my-4 text-sm">
        {children}
      </pre>
    ),
  };

  if (!article)
    return <div className="dark:text-white">Chargement de l'article...</div>;

  return (
    <>
      {/* SEO spécifique à l'article */}
      <SEO
        title={`${article.title} | MAUNN Blog`}
        description={article.description}
        image={article.imgUrl}
        type="article"
        published={article.date}
        author={article.author}
        section="Blog"
      />

      {/* Structured Data pour l'article */}
      <ArticleStructuredData
        title={article.title}
        description={article.description}
        image={article.imgUrl}
        datePublished={article.date}
        authorName={article.author}
        url={`https://www.maunn.fr/Blog/${article.id}`}
      />

      {/* Contenu de l'article */}
      <div className="prose prose-lg mx-auto">
        <div className="mb-8">
          <img
            src={article.imgUrl}
            alt={article.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <span>Par {article.author}</span>
            <span>
              {new Date(article.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>

        <ReactMarkdown components={renderers} remarkPlugins={[remarkGfm]}>
          {markdown}
        </ReactMarkdown>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl dark:text-white font-bold mb-4">
            Partagez cet article
          </h3>
          <div className="flex space-x-4">
            <a
              href={`https://twitter.com/intent/tweet?url=https://www.maunn.fr/Blog/${article.id}&text=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
              aria-label="Partager sur Twitter"
            >
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.maunn.fr/Blog/${article.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
              aria-label="Partager sur LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
