import DashboardView from "../components/views/DashboardView";
import Sidebar from "../components/templates/Sidebar";

const Dashboard: React.FC = () => {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <DashboardView />
            </div>
        </>
    )
};

export default Dashboard;