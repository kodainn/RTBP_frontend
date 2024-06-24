import { useParams } from "react-router-dom";
import { useFetchStudyingBookRecord } from "../../hooks/useFetchStudyingBookRecord";
import LinkText from "../parts/LinkText";
import BookDetailCard from "../templates/BookDetailCard";
import StudyingBookRecordForm from "../templates/StudyingBookRecordForm";
import { useCookies } from "react-cookie";




const StudyingBookRecordView: React.FC = () => {
    const { id } = useParams();
    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const studyingBooks = useFetchStudyingBookRecord(id, accessToken);

    if(studyingBooks === null) {
        return <></>;
    }

    return (
        <>
            <div className="mt-6">
                <LinkText
                    link="/studying-books"
                    name="< 戻る"
                    size="base"
                />
            </div>
            <div className="max-w-xl mx-auto">
                <div className="flex justify-center mt-12 mb-12">
                    <div className="w-full">
                        <BookDetailCard
                            shelveName={studyingBooks.book.shelve_name}
                            title={studyingBooks.book.title}
                            imgUrl={studyingBooks.book.img_url}
                            remark={studyingBooks.book.remark}
                        />
                    </div>
                </div>
                <div className="flex justify-center mb-6 mt-6">
                    <div className="w-full">
                        <StudyingBookRecordForm
                            id={studyingBooks.studying_book.id}
                            startOn={studyingBooks.studying_book.start_on}
                            targetOn={studyingBooks.studying_book.target_on}
                            memo={studyingBooks.studying_book.memo}
                            targetItems={studyingBooks.studying_book.target_items}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudyingBookRecordView;