import { JSX, useState } from "react";

interface IconButtonProps {
  icon: JSX.Element;
  onClick?: () => void;
}

const IconButton = ({ icon, onClick }: IconButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded transition-colors duration-300 ${
        isActive ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"
      } hover:bg-blue-600`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
