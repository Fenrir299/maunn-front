import React from "react";
import Feed from "./Feed";
import Header from "./Header";

const Blog: React.FC = () => {
  return (
    <section className="bg-white dark:bg-background overflow-x-hidden w-full">
      <Header />
      <Feed />
    </section>
  );
};
export default Blog;
