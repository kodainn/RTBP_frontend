import BookStatusCard from "../templates/BookStatusCard";
import StudyingBookStatusCard from "../templates/StudyingBookStatusCard";
import StudyingStatusCard from "../templates/StudyingStatusCard";

const DashboardView: React.FC = () => {
    return (
        <>
            <div className="mt-24 ml-24 mr-24">
                <StudyingBookStatusCard />
            </div>
            <div className="mt-24 ml-24 mr-24">
                <StudyingStatusCard />
            </div>
            <div className="mt-24 ml-24 mr-24 mb-24">
                <BookStatusCard />
            </div>
        </>
    );
};

export default DashboardView;