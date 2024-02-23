import React from "react";

interface KeyItemProps {
  title: string;
  description: string;
}

const KeyItem: React.FC<KeyItemProps> = ({ title, description }) => {
  return (
    <li>
      <h3 className="font-noto text-2xl uppercase">{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default KeyItem;
