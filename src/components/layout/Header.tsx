import { Search, Moon, MessageSquare, Bell } from "lucide-react";
import IconButton from "@/components/ui/IconButton";
import LoginButton from "@/components/ui/LoginButton";

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header = ({ toggleSidebar, isSidebarOpen }: HeaderProps) => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center transition-all duration-300">
      {/* Botón para abrir/cerrar el Sidebar */}
      <button onClick={toggleSidebar} className="text-white p-2">
        {isSidebarOpen ? "✖️" : "☰"}
      </button>

      <h1 className="text-xl font-semibold">Panel de Control</h1>

      {/* Botones de iconos */}
      <div className="flex space-x-2">
        <IconButton icon={<Search size={20} />} />
        <IconButton icon={<Moon size={20} />} />
        <IconButton icon={<MessageSquare size={20} />} />
        <IconButton icon={<Bell size={20} />} />
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
