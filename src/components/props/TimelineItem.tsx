import React from "react";

interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  date,
  description,
}) => {
  return (
    <li>
      <h3 className="font-noto text-lg lg:text-2xl uppercase">{title}</h3>
      <p className="text-base sm:text-lg">{date}</p>
      <p>{description}</p>
    </li>
  );
};

export default TimelineItem;
