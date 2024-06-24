import StudyingBookCard from "../templates/StudyingBookCard";
import SuccessAlertMessage from "../parts/SuccessAlertMessage";
import FaildAlertMessage from "../parts/FaildAlertMessage";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useFetchStudyingBooks } from "../../hooks/useFetchStudyingBooks";

const StudyingBookListView: React.FC = () => {

    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const studyingBooks = useFetchStudyingBooks(accessToken);

    const StudyingBookRecord = useLocation().state;

    return (
        <div className="mt-24">
            <div className="w-[60%] mb-6">
                {StudyingBookRecord !== null && StudyingBookRecord.type === "success" && <SuccessAlertMessage message={StudyingBookRecord.message} />}
                {StudyingBookRecord !== null && StudyingBookRecord.type === "faild" && <FaildAlertMessage message={StudyingBookRecord.message} />}
            </div>
            <div className="flex flex-wrap">
                {studyingBooks === null && <div>loading...</div>}
                {studyingBooks && studyingBooks["studying_books"].length === 0 && <div>学習書籍情報がありません。</div>}
                {studyingBooks && studyingBooks["studying_books"].map((studyingBook) => {
                    return (
                        <div key={studyingBook.id} className="w-full sm:w-1/2 xl:w-1/3 p-4">
                            <StudyingBookCard
                                id={studyingBook.id}
                                title={studyingBook.title}
                                imgUrl={studyingBook.img_url}
                                startOn={studyingBook.start_on}
                                targetOn={studyingBook.target_on}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default StudyingBookListView;