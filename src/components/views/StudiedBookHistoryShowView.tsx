import { useEffect, useState } from "react";
import LinkText from "../parts/LinkText";
import BookDetailCard from "../templates/BookDetailCard";
import StudiedBookHistoryDetailCard from "../templates/StudiedBookHistoryDetailCard";
import axios, { AxiosResponse } from "axios";
import { useNavigate, useParams } from "react-router-dom";

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


const fetchStudiedHistoryBooks = (book_id: string | undefined): StudiedHistoryBooksResponse | null => {
    const navigate = useNavigate();

    const [ data, setData ] = useState<StudiedHistoryBooksResponse | null>(null);
    useEffect(() => {
        const fetchData = (book_id: string | undefined): void => {
            axios.get(import.meta.env.VITE_API_URL + "/studied-history-books/" + book_id)
            .then((res:AxiosResponse<StudiedHistoryBooksResponse>) => {
                if(res.status === 200) {
                    setData(res.data);
                }
            })
            .catch((error: any) => {
                if(error.response?.status === 404) {
                    navigate("/studied-history-books");
                }
                if(error.response?.status === 422) {
                    navigate("/studied-history-books");
                }
            });
        }

        fetchData(book_id);
    })

    return data;
}


const StudiedBookHistoryShowView: React.FC = () => {

    const { book_id } = useParams();

    const studiedHistoryBooks = fetchStudiedHistoryBooks(book_id);

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