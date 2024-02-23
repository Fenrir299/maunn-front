import React from "react";

interface BlogCardVideoProps {
  title: string;
  description: string;
  iframeSrc: string;
  link: string;
  size?: "small" | "medium" | "large";
}

const BlogCardVideo: React.FC<BlogCardVideoProps> = ({
  title,
  description,
  iframeSrc,
  link,
  size = "medium",
}) => {
  const width =
    size === "small" ? "w-64" : size === "large" ? "w-mockup" : "w-84";
  const height = size === "small" ? "h-40" : size === "large" ? "h-64" : "h-60";

  return (
    <div>
      <div
        className={`bg-gray-300 rounded-xl overflow-hidden shadow-lg ${width}`}
      >
        <iframe
          className={`${height} w-full bg-gray-300`}
          src={iframeSrc}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h2 className="font-noto dark:text-purple-camille uppercase text-lg py-2">
        {title}
      </h2>

      <button
        className="text-left dark:text-white text-xl hover:text-clear-modred dark:hover:text-red-camille font-bold 
        rounded-xl focus:outline-none focus:shadow-outline"
        onClick={link ? () => window.open(link, "_blank") : undefined}
      >
        {description}
      </button>
    </div>
  );
};

export default BlogCardVideo;
