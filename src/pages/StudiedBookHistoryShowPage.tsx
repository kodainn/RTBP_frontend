import Sidebar from "../components/templates/Sidebar";
import StudiedBookHistoryShowView from "../components/views/StudiedBookHistoryShowView";

const StudiedBookHistoryShow: React.FC = () => {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <StudiedBookHistoryShowView />
            </div>
        </>
    );
};

export default StudiedBookHistoryShow;