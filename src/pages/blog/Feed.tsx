import React from "react";
import articlesData from "../../components/data/ArticlesData";
import BlogCard from "../../components/props/BlogCard";
import BlogCardVideo from "../../components/props/BlogCardVideo";
import videosData from "../../components/data/VideoData";

const Feed: React.FC = () => {
  const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const combinedItems = [
    ...articlesData.map((article) => ({
      type: "article",
      data: article,
    })),
    ...videosData.map((video) => ({
      type: "video",
      data: video,
    })),
  ];

  const shuffledItems = shuffleArray(combinedItems);

  return (
    <section className="w-full relative justify-center  h-gridxs md:h-time min-h-time dark:text-white">
      <div className="absolute -top-48 py-16 px-4 xs:px-12 sm:px-24 lg:px-32 w-full">
        <h1 className="text-3xl sm:text-5xl text-header dark:text-yellow-camille font-noto w-full uppercase mb-12">
          {"Blog"}
        </h1>
        <div className="justify-items-stretch w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {shuffledItems.map((item, index) =>
            item.type === "article" ? (
              <BlogCard
                key={index}
                title={item.data.title}
                description={item.data.description}
                imgUrl={item.data.imgUrl}
                link={`/blog/${item.data.id}`}
                size="large"
              />
            ) : (
              <BlogCardVideo
                key={index}
                title={item.data.title}
                description={item.data.description}
                iframeSrc={item.data.iframeSrc}
                link={item.data.link}
                size="large"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Feed;
