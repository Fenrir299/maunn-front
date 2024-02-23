import React from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  description: string;
  imgUrl: string;
  link: string;
  size?: "small" | "medium" | "large";
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  imgUrl,
  link,
  size = "medium",
}) => {
  const width =
    size === "small" ? "w-40" : size === "large" ? "w-auto" : "w-80";
  const height = size === "small" ? "h-64" : size === "large" ? "h-56" : "h-48";

  return (
    <div>
      <Link
        to={link}
        className=" text-white text-xl  hover:text-red-camille font-bold 
        rounded-xl focus:outline-none focus:shadow-outline"
      >
        <div
          className={`bg-gray-300 rounded-xl overflow-hidden shadow-lg ${width}`}
        >
          <img
            className={`${height} w-full bg-gray-300`}
            src={imgUrl}
            alt={title}
          />
        </div>
      </Link>

      <h2 className="font-noto dark:text-clear-blue uppercase text-lg py-2">
        {title}
      </h2>

      <Link
        to={link}
        className=" dark:text-white text-xl hover:text-clear-modred dark:hover:text-red-camille font-bold 
        rounded-xl focus:outline-none focus:shadow-outline"
      >
        {description}
      </Link>
    </div>
  );
};

export default BlogCard;
