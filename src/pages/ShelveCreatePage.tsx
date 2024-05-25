import Sidebar from "../components/templates/Sidebar";
import ShelveCreateView from "../components/views/ShelveCreateView";

const ShelveCreatePage: React.FC = () => {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <ShelveCreateView />
            </div>
        </>
    );
};

export default ShelveCreatePage;