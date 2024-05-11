import { useParams } from "react-router-dom";
import SidebarView from "../components/views/SidebarView";

type Params = {
    id: string
};

const BookStudyCreate: React.FC = () => {
    const { id } = useParams<Params>();
    return (
        <>
            <SidebarView />
            <div className="p-4 sm:ml-64">学習書籍作成{id}</div>
        </>
    );
};

export default BookStudyCreate;