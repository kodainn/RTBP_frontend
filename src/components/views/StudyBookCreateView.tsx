import axios, { AxiosResponse } from "axios";
import LinkText from "../parts/LinkText";
import BookDetailCard from "../templates/BookDetailCard";
import StudyBookCreateFormCard from "../templates/StudyBookCreateFormCard";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type BookResponse = {
    id:           number,
    shelve_name: string,
    title:        string,
    remark:       string,
    img_url:      string
}

const fetchBook = (id: string | undefined): BookResponse | null => {
    const navigate = useNavigate();

    const [ data, setData ] = useState<BookResponse | null>(null);
    useEffect(() => {
        const fetchData = async(id: string | undefined) => {
            await axios.get(import.meta.env.VITE_API_URL + "/books/" + id)
            .then((res: AxiosResponse<BookResponse>) => {
                if(res.status === 200) {
                    setData(res.data);
                }
            })
            .catch((error: any) => {
                if(error.response?.status === 404) {
                    navigate("/shelves");
                }
                if(error.response?.status === 422) {
                    navigate("/shelves");
                }
                if(error.response?.status === 500) {
                    navigate("/shelves");
                }
            });
        }

        fetchData(id);
    }, []);

    return data;
}

const StudyBookCreateView: React.FC = () => {
    const { id } = useParams();

    const book = fetchBook(id);

    if(book === null) {
        return <></>;
    }

    return (
        <>
            <div className="mt-6">
                <LinkText
                    link="/shelves"
                    name="< 戻る"
                    size="base"
                />
            </div>
            <div className="max-w-xl mx-auto">
                <div className="flex justify-center mt-12 mb-12">
                    <div className="w-full">
                        <BookDetailCard
                            shelveName={book.shelve_name}
                            title={book.title}
                            remark={book.remark}
                            imgUrl={book.img_url}
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-full mb-24">
                        <StudyBookCreateFormCard book_id={book.id}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudyBookCreateView;