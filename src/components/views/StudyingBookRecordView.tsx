import { useEffect, useState } from "react";
import LinkText from "../parts/LinkText";
import BookDetailCard from "../templates/BookDetailCard";
import StudyingBookRecordForm from "../templates/StudyingBookRecordForm";
import axios, { AxiosError, AxiosResponse } from "axios";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

type StudyingBooksResponse = {
    book: {
        id:          number,
        shelve_name: string,
        title:       string,
        remark:      string,
        img_url:     string
    },
    studying_book: {
        id:        number,
        start_on:  string,
        target_on: string,
        memo:      string,
        target_items: {
            id:           number,
            description:  string,
            is_completed: boolean
        }[]
    }
};


const fetchStudyingBooks = (id: string | undefined, accessToken: string, navigate: NavigateFunction): StudyingBooksResponse | null => {

    const [ data, setData ] = useState<StudyingBooksResponse | null>(null);

    useEffect(() => {
        axios.get(process.env.VITE_API_URL + "/studying-books/" + id, {
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
                navigate("/studying-books");
            }
            if(error.response?.status === 500) {
                navigate("/studying-books");
            }
        });
    }, []);

    return data;
}


const StudyingBookRecordView: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const studyingBooks = fetchStudyingBooks(id, accessToken, navigate);

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