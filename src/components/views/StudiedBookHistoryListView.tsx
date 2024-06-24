import { useFetchStudiedBooksHistory } from "../../hooks/useFetchStudiedBooksHistory";
import StudiedBookHistoryCard from "../templates/StudiedBookHistoryCard";
import { useCookies } from "react-cookie";



const StudiedBookHistoryListView: React.FC = () => {

    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const studiedBooksHistory = useFetchStudiedBooksHistory(accessToken);

    return (
        <div className="mt-24">
            <div className="flex flex-wrap">
                {studiedBooksHistory === null && <div>loading...</div>}
                {studiedBooksHistory && studiedBooksHistory["studied_history_books"].length === 0 && <div>学習書籍履歴情報がありません。</div>}
                {studiedBooksHistory && studiedBooksHistory["studied_history_books"].map((studiedBookHistory) => {
                    return (
                        <div key={studiedBookHistory.book_id} className="w-full sm:w-1/2 xl:w-1/3 p-4">
                            <StudiedBookHistoryCard
                                bookId={studiedBookHistory.book_id}
                                title={studiedBookHistory.title}
                                imgUrl={studiedBookHistory.img_url}
                                studiedCount={studiedBookHistory.studied_count}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default StudiedBookHistoryListView;