import { useParams } from "react-router-dom";
import Sidebar from "../components/templates/Sidebar";

type Params = {
    id: string
};

const StudiedBookHistoryShow: React.FC = () => {
    const { id } = useParams<Params>();
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">学習書籍履歴詳細{id}</div>
        </>
    );
};

export default StudiedBookHistoryShow;