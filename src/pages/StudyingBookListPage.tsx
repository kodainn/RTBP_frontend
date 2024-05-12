import Sidebar from "../components/templates/Sidebar";
import StudyingBookListView from "../components/views/StudyingBookListView";

const StudyingBookList: React.FC = () => {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <StudyingBookListView />
            </div>
        </>
    );
};

export default StudyingBookList;