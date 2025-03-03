import MenuItem from "@/components/ui/MenuItem";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <aside
      className={`bg-gray-800 text-white fixed h-full transition-all duration-300 ${
        isOpen ? "w-64 p-4" : "w-0 overflow-hidden"
      }`}
    >
      {isOpen && (
        <>
          <h2 className="text-2xl font-bold mb-6">AcademiaSJL</h2>
          <nav>
            <MenuItem label="Inicio" path="/" />
            <MenuItem
              label="Estudiantes"
              subMenu={[
                { label: "Lista de Estudiantes", path: "/students" },
                { label: "Registrar Estudiante", path: "/students/add" },
              ]}
            />
            <MenuItem
              label="Profesores"
              subMenu={[
                { label: "Lista de Profesores", path: "/teachers" },
                { label: "Agregar Profesor", path: "/teachers/add" },
              ]}
            />
            <MenuItem
              label="Cursos"
              subMenu={[
                { label: "Ver Cursos", path: "/courses" },
                { label: "Nuevo Curso", path: "/courses/add" },
              ]}
            />
            <MenuItem label="Reportes" path="/reports" />
          </nav>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
