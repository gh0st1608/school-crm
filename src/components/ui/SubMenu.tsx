import { Link } from "react-router-dom";

interface SubMenuProps {
  items: { label: string; path: string }[];
}

const SubMenu = ({ items }: SubMenuProps) => {
  return (
    <div className="ml-4 border-l border-gray-600">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="block py-2 px-4 text-gray-300 hover:bg-gray-700/15 rounded"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default SubMenu;
