import { useParams } from "react-router-dom";
import Sidebar from "../components/templates/Sidebar";
import StudyingBookRecordView from "../components/views/StudyingBookRecordView";

type Params = {
    id: string;
};

const StudyingBookRecord: React.FC = () => {
    const { id } = useParams<Params>();
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <StudyingBookRecordView />
            </div>
        </>
    );
};

export default StudyingBookRecord;