import { useEffect, useState } from "react";
import StudiedBookHistoryCard from "../templates/StudiedBookHistoryCard";
import axios, { AxiosError, AxiosResponse } from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

type StudiedBooksHistoryResponse = {
    studied_history_books: {
        book_id:       number,
        title:         string,
        img_url:       string,
        studied_count: number
    }[]
};

const fetchStudiedBooksHistory = (accessToken: string, navigate: NavigateFunction): StudiedBooksHistoryResponse | null => {
    const [ data ,setData ] = useState<StudiedBooksHistoryResponse | null>(null);
    useEffect(() => {
        axios.get(process.env.VITE_API_URL + "/studied-history-books", {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<any>) => {
            if(res.status === 200) {
                setData(res.data);
            }
        })
        .catch((error: AxiosError<any>) => {
            if(error.response?.status === 401) {
                navigate("/login", {state: {message: "ログインしてください。", type: "faild"}});
            }
        });
    });

    return data;
}

const StudiedBookHistoryListView: React.FC = () => {

    const navigate = useNavigate();
    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const studiedBooksHistory = fetchStudiedBooksHistory(accessToken, navigate);

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