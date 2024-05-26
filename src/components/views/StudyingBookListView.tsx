import { useEffect, useState } from "react";
import StudyingBookCard from "../templates/StudyingBookCard";
import axios from "axios";

type StudyingBooksResponse = {
    studying_books: {
        id:        number,
        title:     string,
        img_url:   string,
        start_on:  Date,
        target_on: Date
    }[];
};


const fetchStudyingBooks = () => {
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

    if(studyingBooks === null) {
        return <div>loading...</div>;
    }

    if(studyingBooks["studying_books"].length === 0) {
        return <div>学習書籍情報がありません。</div>;
    }

    return (
        <div className="mt-24">
            <div className="flex flex-wrap">
                {studyingBooks["studying_books"].map((studyingBook) => {
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