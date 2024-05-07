import SidebarView from "../components/views/SidebarView";

const Dashboard: React.FC = () => {
    return (
        <>
            <SidebarView />
            <div className="p-4 sm:ml-64">ダッシュボード</div>
        </>
    )
};

export default Dashboard;