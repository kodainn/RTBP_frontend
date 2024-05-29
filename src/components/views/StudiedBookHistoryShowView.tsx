import { useEffect, useState } from "react";
import LinkText from "../parts/LinkText";
import BookDetailCard from "../templates/BookDetailCard";
import StudiedBookHistoryDetailCard from "../templates/StudiedBookHistoryDetailCard";
import axios, { AxiosError, AxiosResponse } from "axios";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

type StudiedHistoryBooksResponse = {
    book: {
        id:          number,
        shelve_name: string,
        title:       string,
        remark:      string,
        img_url:     string
    },
    studied_histories: {
        id: number,
        start_on:  string,
        target_on: string,
        target_items: {
            id:           number,
            description:  string,
            is_completed: boolean
        }[],
        memo:          string,
        study_minutes: number
    }[]
};


const fetchStudiedHistoryBooks = (book_id: string | undefined, accessToken: string, navigate: NavigateFunction): StudiedHistoryBooksResponse | null => {

    const [ data, setData ] = useState<StudiedHistoryBooksResponse | null>(null);

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "/studied-history-books/" + book_id, {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res:AxiosResponse<any>) => {
            if(res.status === 200) {
                setData(res.data);
            }
        })
        .catch((error: AxiosError<any>) => {
            if(error.response?.status === 401) {
                navigate("/login", {state: {message: "ログインしてください。", type: "faild"}});
            }
            if(error.response?.status === 404 || error.response?.status === 422) {
                navigate("/studied-history-books");
            }
        });
    })

    return data;
}


const StudiedBookHistoryShowView: React.FC = () => {

    const { book_id } = useParams();

    const navigate = useNavigate();
    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const studiedHistoryBooks = fetchStudiedHistoryBooks(book_id, accessToken, navigate);

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