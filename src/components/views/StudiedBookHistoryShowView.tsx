import LinkText from "../parts/LinkText";
import BookDetailCard from "../templates/BookDetailCard";
import StudiedBookHistoryDetailCard from "../templates/StudiedBookHistoryDetailCard";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useFetchStudiedHistoryBooks } from "../../hooks/useFetchStudiedHistoryBooks";


const StudiedBookHistoryShowView: React.FC = () => {

    const { book_id } = useParams();
    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const studiedHistoryBooks = useFetchStudiedHistoryBooks(book_id, accessToken);

    if(studiedHistoryBooks === null) {
        return <></>;
    }

    return (
        <>
            <div className="mt-6">
                <LinkText
                        link="/studied-history-books"
                        name="< 戻る"
                        size="base"
                    />
            </div>
            <div className="max-w-xl mx-auto">
                <div className="flex justify-center mt-12 mb-12">
                    <div className="w-full">
                        <BookDetailCard
                            shelveName={studiedHistoryBooks.book.shelve_name}
                            title={studiedHistoryBooks.book.title}
                            remark={studiedHistoryBooks.book.remark}
                            imgUrl={studiedHistoryBooks.book.img_url}

                        />
                    </div>
                </div>
                {studiedHistoryBooks["studied_histories"].map((studiedHistoryBook) => {
                    return (
                        <div key={studiedHistoryBook.id} className="flex justify-center mb-6 mt-6">
                            <div className="w-full">
                                <StudiedBookHistoryDetailCard
                                    startOn={studiedHistoryBook.start_on}
                                    targetOn={studiedHistoryBook.target_on}
                                    targetItems={studiedHistoryBook.target_items}
                                    memo={studiedHistoryBook.memo}
                                    studyMinutes={studiedHistoryBook.study_minutes}
                                />
                            </div>
                        </div>     
                    );
                })}
            </div>
        </>
    );
};

export default StudiedBookHistoryShowView;