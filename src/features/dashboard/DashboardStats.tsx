import { Users, GraduationCap, Calendar, School } from "lucide-react";
import InfoCard from "@/components/ui/InfoCard";

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <InfoCard title="Estudiantes" value={1200} icon={<Users size={40} />} color="bg-blue-500" />
      <InfoCard title="Profesores" value={80} icon={<GraduationCap size={40} />} color="bg-green-500" />
      <InfoCard title="Eventos" value={15} icon={<Calendar size={40} />} color="bg-yellow-500" />
      <InfoCard title="Aulas Habilitadas" value={50} icon={<School size={40} />} color="bg-red-500" />
    </div>
  );
};

export default DashboardStats;
