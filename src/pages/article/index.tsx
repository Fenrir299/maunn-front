import React from "react";
import { useParams } from "react-router-dom";
import BlogPost from "../../components/BlogPost";
import NotFound from "../notfound";
import articlesData from "../../components/data/ArticlesData";

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articlesData.find((article) => article.id.toString() === id);

  if (!article) {
    return <NotFound />;
  }

  return (
    <div
      className="bg-white dark:bg-background overflow-x-hidden w-full
       dark:text-white px-12 sm:px-24 lg:px-32 py-32"
    >
      <h1 className="font-noto uppercase text-3xl text-clear-modred dark:text-yellow-camille">
        {article.title}
      </h1>
      <BlogPost articleId={id as string} />
    </div>
  );
};

export default Article;
