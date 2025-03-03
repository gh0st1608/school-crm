import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      
      <Sidebar isOpen={isSidebarOpen} />

      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />

        {/* Contenido Principal */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
