import { useParams } from "react-router-dom";
import Sidebar from "../components/templates/Sidebar";

type Params = {
    id: string
};

const StudyBookCreate: React.FC = () => {
    const { id } = useParams<Params>();
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">学習書籍作成{id}</div>
        </>
    );
};

export default StudyBookCreate;