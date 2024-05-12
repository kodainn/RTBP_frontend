import Sidebar from "../components/templates/Sidebar";
import StudiedBookHistoryListView from "../components/views/StudiedBookHistoryListView";

const StudiedBookHistoryList: React.FC = () => {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <StudiedBookHistoryListView />
            </div>
        </>
    );
};

export default StudiedBookHistoryList;