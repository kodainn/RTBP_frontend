import Sidebar from "../components/templates/Sidebar";
import StudyBookCreateView from "../components/views/StudyBookCreateView";


const StudyBookCreate: React.FC = () => {
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