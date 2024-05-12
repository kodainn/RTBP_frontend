import { useParams } from "react-router-dom";
import Sidebar from "../components/templates/Sidebar";
import StudyBookCreateView from "../components/views/StudyBookCreateView";

type Params = {
    id: string
};

const StudyBookCreate: React.FC = () => {
    const { id } = useParams<Params>();
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <StudyBookCreateView />
            </div>
        </>
    );
};

export default StudyBookCreate;