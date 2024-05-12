import Sidebar from "../components/templates/Sidebar";
import StudyingBookRecordView from "../components/views/StudyingBookRecordView";


const StudyingBookRecord: React.FC = () => {
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