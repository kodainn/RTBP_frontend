import { useEffect, useState } from "react";
import StudiedBookHistoryCard from "../templates/StudiedBookHistoryCard";
import axios from "axios";

type StudiedBooksHistoryResponse = {
    studied_history_books: {
        book_id:       number,
        title:         string,
        img_url:       string,
        studied_count: number
    }[]
};

const fetchStudiedBooksHistory = (): StudiedBooksHistoryResponse | null => {
    const [ data ,setData ] = useState<StudiedBooksHistoryResponse | null>(null);
    useEffect(() => {
        const fetchData = async() => {
            const res = await axios.get(import.meta.env.VITE_API_URL + "/studied-history-books");
            setData(res.data);
        };
        fetchData();
    });

    return data;
}

const StudiedBookHistoryListView: React.FC = () => {

    const studiedBooksHistory = fetchStudiedBooksHistory();

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