import { useEffect, useState } from "react";
import StudyingBookCard from "../templates/StudyingBookCard";
import axios from "axios";
import SuccessAlertMessage from "../parts/SuccessAlertMessage";
import FaildAlertMessage from "../parts/FaildAlertMessage";
import { useLocation } from "react-router-dom";
import defaultBookImage from "../../assets/default_book.png";

type StudyingBooksResponse = {
    studying_books: {
        id:        number,
        title:     string,
        img_url:   string,
        start_on:  Date,
        target_on: Date
    }[];
};


const fetchStudyingBooks = (): StudyingBooksResponse | null => {
    const [ data, setData ] = useState<StudyingBooksResponse | null>(null);
    useEffect(() => {
        const fetchData = async() => {
            const res = await axios.get(import.meta.env.VITE_API_URL + "/studying-books");
            if(res.status === 200) {
                setData(res.data);
            }
        };
        fetchData();
    }, []);

    return data;
}

const StudyingBookListView: React.FC = () => {

    const studyingBooks = fetchStudyingBooks();

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
                                imgUrl={studyingBook.img_url ? studyingBook.img_url : defaultBookImage}
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