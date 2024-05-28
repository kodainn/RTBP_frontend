import { useEffect, useState } from "react";
import LinkText from "../parts/LinkText";
import BookDetailCard from "../templates/BookDetailCard";
import StudyingBookRecordForm from "../templates/StudyingBookRecordForm";
import axios, { AxiosResponse } from "axios";
import { useNavigate, useParams } from "react-router-dom";

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


const fetchStudyingBooks = (id: string | undefined): StudyingBooksResponse | null => {
    const navigate = useNavigate();

    const [ data, setData ] = useState<StudyingBooksResponse | null>(null);

    useEffect(() => {
        const fetchData = async(id: string | undefined) => {
            axios.get(import.meta.env.VITE_API_URL + "/studying-books/" + id)
            .then((res:AxiosResponse<StudyingBooksResponse>) => {
                if(res.status === 200) {
                    setData(res.data);
                }
            })
            .catch((error: any) => {
                if(error.response?.status === 404) {
                    navigate("/studying-books");
                }
                if(error.response?.status === 422) {
                    navigate("/studying-books");
                }
                if(error.response?.status === 500) {
                    navigate("/studying-books");
                }
            });
        }
        fetchData(id);
    }, []);

    return data;
}


const StudyingBookRecordView: React.FC = () => {
    const { id } = useParams();
    const studyingBooks = fetchStudyingBooks(id);

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