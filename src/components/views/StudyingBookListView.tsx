import { useEffect, useState } from "react";
import StudyingBookCard from "../templates/StudyingBookCard";
import axios, { AxiosError, AxiosResponse } from "axios";
import SuccessAlertMessage from "../parts/SuccessAlertMessage";
import FaildAlertMessage from "../parts/FaildAlertMessage";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

type StudyingBooksResponse = {
    studying_books: {
        id:        number,
        title:     string,
        img_url:   string,
        start_on:  Date,
        target_on: Date
    }[];
};


const fetchStudyingBooks = (accessToken: string, navigate: NavigateFunction): StudyingBooksResponse | null => {
    const [ data, setData ] = useState<StudyingBooksResponse | null>(null);
    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "/studying-books", {
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
    }, []);

    return data;
}

const StudyingBookListView: React.FC = () => {

    const navigate = useNavigate();
    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const studyingBooks = fetchStudyingBooks(accessToken, navigate);

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