import axios, { AxiosError, AxiosResponse } from "axios";
import LinkText from "../parts/LinkText";
import BookDetailCard from "../templates/BookDetailCard";
import StudyBookCreateFormCard from "../templates/StudyBookCreateFormCard";
import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

type BookResponse = {
    id:          number,
    shelve_name: string,
    title:       string,
    remark:      string,
    img_url:     string
}

const fetchBook = (id: string | undefined, accessToken: string, navigate: NavigateFunction): BookResponse | null => {

    const [ data, setData ] = useState<BookResponse | null>(null);

    useEffect(() => {
        axios.get(process.env.VITE_API_URL + "/books/" + id, {
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
            if(error.response?.status === 404 || error.response?.status === 422) {
                navigate("/shelves");
            }
            if(error.response?.status === 500) {
                navigate("/shelves");
            }
        });
    }, []);

    return data;
}

const StudyBookCreateView: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const book = fetchBook(id, accessToken, navigate);

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