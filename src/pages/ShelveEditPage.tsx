import Sidebar from "../components/templates/Sidebar";
import ShelveCreateView from "../components/views/ShelveCreateView";

const ShelveEditPage: React.FC = () => {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64 mt-12">
                <ShelveCreateView />
            </div>
        </>
    );
};

export default ShelveEditPage;