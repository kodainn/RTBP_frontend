import BookStatusCardView from "../components/views/BookStatusCardView";
import SidebarView from "../components/views/SidebarView";
import StudyingBookStatusCardView from "../components/views/StudyingBookStatusCardView";
import StudyingStatusCardView from "../components/views/StudyingStatusCardView";

const Dashboard: React.FC = () => {
    return (
        <>
            <SidebarView />
            <div className="p-4 sm:ml-64">
                <div className="mt-24 ml-24 mr-24">
                    <StudyingBookStatusCardView />
                </div>
                <div className="mt-24 ml-24 mr-24">
                    <StudyingStatusCardView />
                </div>
                <div className="mt-24 ml-24 mr-24">
                    <BookStatusCardView />
                </div>
            </div>
        </>
    )
};

export default Dashboard;