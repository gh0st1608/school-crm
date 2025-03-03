import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardStats from "@/features/dashboard/DashboardStats";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h2 className="text-3xl font-bold">Bienvenido al Dashboard</h2>
      <p className="mt-2 text-gray-600">
        Aquí podrás gestionar estudiantes, profesores y cursos.
      </p>
      <DashboardStats />
    </DashboardLayout>
  );
};

export default Dashboard;
