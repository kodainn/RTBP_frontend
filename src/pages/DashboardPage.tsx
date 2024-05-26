import { Suspense } from "react";

import DashboardView from "../components/views/DashboardView";
import Sidebar from "../components/templates/Sidebar";

const Dashboard: React.FC = () => {

    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <Suspense fallback={<div>loading...</div>}>
                    <DashboardView />
                </Suspense>
            </div>
        </>
    )
};

export default Dashboard;