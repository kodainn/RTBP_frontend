import SheveListView from "../components/views/SheveListView";
import Sidebar from "../components/templates/Sidebar";

const ShelveList: React.FC = () => {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64 mt-12">
                <SheveListView />
            </div>
        </>
    );
};

export default ShelveList;