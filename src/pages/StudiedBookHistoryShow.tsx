import { useParams } from "react-router-dom";
import Sidebar from "../components/templates/Sidebar";
import StudiedBookHistoryShowView from "../components/views/StudiedBookHistoryShowView";

type Params = {
    id: string
};

const StudiedBookHistoryShow: React.FC = () => {
    const { id } = useParams<Params>();
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