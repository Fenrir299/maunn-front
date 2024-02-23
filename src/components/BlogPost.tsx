import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import articlesData from "./data/ArticlesData";

interface BlogPostProps {
  articleId: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ articleId }) => {
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    const article = articlesData.find((a) => a.id === articleId);
    if (!article) return;

    fetch(`/content/blog/${article.fileName}`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
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
      <p className="text-base dark:text-white leading-relaxed">{children}</p>
    ),
    ul: ({ children }: any) => (
      <ul className="list-disc list-inside dark:text-white">{children}</ul>
    ),
    ol: ({ children }: any) => (
      <ol className="list-decimal list-inside dark:text-white">{children}</ol>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic dark:text-white">
        {children}
      </blockquote>
    ),
  };

  return (
    <div className="prose prose-lg mx-auto">
      <ReactMarkdown components={renderers} remarkPlugins={[remarkGfm]}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default BlogPost;
