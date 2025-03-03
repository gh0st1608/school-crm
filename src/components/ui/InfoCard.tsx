import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  value: number;
  icon: ReactNode;
  color?: string;
}

const InfoCard = ({ title, value, icon, color = "bg-blue-500" }: InfoCardProps) => {
  return (
    <div className={`p-6 rounded-lg shadow-md text-white ${color} flex flex-col items-center`}>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-3xl font-bold">{value}</p>
      <div className="mt-3">{icon}</div>
    </div>
  );
};

export default InfoCard;
