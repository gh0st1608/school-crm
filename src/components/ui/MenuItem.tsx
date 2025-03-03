import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react"; // Íconos de desplegable
import SubMenu from "./SubMenu";

interface SubMenuItem {
  label: string;
  path: string;
}

interface MenuItemProps {
  label: string;
  path?: string;
  subMenu?: SubMenuItem[];
}

const MenuItem = ({ label, path, subMenu }: MenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center justify-between py-2 px-4 rounded hover:bg-gray-700/15 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {path ? (
          <Link to={path} className="text-white w-full">{label}</Link>
        ) : (
          <span className="text-white">{label}</span>
        )}
        {subMenu && (
          <span>{isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}</span>
        )}
      </div>
      {subMenu && isOpen && <SubMenu items={subMenu} />}
    </div>
  );
};

export default MenuItem;
