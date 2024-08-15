"use client";
 
interface DashboardPageViewProps {
  trans: {
    [key: string]: string;
  };
}
const DashboardPageView = ({ trans }: DashboardPageViewProps) => {
  return (
    <div className="space-y-6">
   Welcome to MyKeyBox DashBoard
    </div>
  );
};

export default DashboardPageView;
