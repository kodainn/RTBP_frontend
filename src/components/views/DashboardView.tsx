import BookStatusCard from "../templates/BookStatusCard";
import StudyingBookStatusCard from "../templates/StudyingBookStatusCard";
import StudyingStatusCard from "../templates/StudyingStatusCard";
import SuccessAlertMessage from "../parts/SuccessAlertMessage";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
import { useFetchStudyBookProgress } from "../../hooks/useFetchStudyBookProgress";
import { useFetchStudyTimes } from "../../hooks/useFetchStudyTimes";
import { useFetchBookCounts } from "../../hooks/useFetchBookCounts";



const DashboardView: React.FC = () => {

    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const StudyBookProgress = useFetchStudyBookProgress(accessToken);
    const StudyTimes = useFetchStudyTimes(accessToken);
    const BookCounts = useFetchBookCounts(accessToken);

    const dashboardStatus = useLocation().state;

    return (
        <>
            <div className="mt-12 ml-24 w-[60%]">
            {dashboardStatus !== null && dashboardStatus.type === "success" && <SuccessAlertMessage message={dashboardStatus.message} />}
            </div>
            <div className="mt-24 ml-24 mr-24">
                {StudyBookProgress === null && StudyTimes === null && BookCounts === null && <div>Loading...</div>}
                {StudyBookProgress && StudyTimes && BookCounts && (
                    <StudyingBookStatusCard
                        studyBooksCompletedCount={StudyBookProgress.study_books_completed_count}
                        studyBooksIncompleteCount={StudyBookProgress.study_books_incomplete_count}
                        startStudyPeriodOn={StudyBookProgress.start_study_period_on}
                        endStudyPeriodOn={StudyBookProgress.end_study_period_on}
                    />
                )}
            </div>
            <div className="mt-24 ml-24 mr-24">
                {StudyBookProgress && StudyTimes && BookCounts && (
                    <StudyingStatusCard
                        studyMinutesTotal={StudyTimes.study_minutes_total}
                        studyMinutesByMonthly={StudyTimes.study_minutes_by_monthly}
                    />
                )}
            </div>
            <div className="mt-24 ml-24 mr-24 mb-24">
                {StudyBookProgress && StudyTimes && BookCounts && (
                    <BookStatusCard
                        bookTotalCount={BookCounts.book_total_count}
                        bookCountByShelve={BookCounts.book_count_by_shelve}
                    />
                )}
            </div>
        </>
    );
};

export default DashboardView;