import Sidebar from "../components/templates/Sidebar";
import ShelveEditView from "../components/views/ShelveEditView";

const ShelveEditPage: React.FC = () => {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64 mt-12">
                <ShelveEditView />
            </div>
        </>
    );
};

export default ShelveEditPage;