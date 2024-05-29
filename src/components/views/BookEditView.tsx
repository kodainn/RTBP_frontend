import { useEffect, useState } from "react";
import LinkText from "../parts/LinkText";
import BookEditFormCard from "../templates/BookEditFormCard";
import axios, { AxiosError, AxiosResponse } from "axios";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

type BookResponse = {
    id:           number,
    shelves_name: string,
    title:        string,
    remark:       string,
    img_url:      string
}

const fetchBook = (id: string | undefined, accessToken: string, navigate: NavigateFunction): BookResponse | null => {

    const [ data, setData ] = useState<BookResponse | null>(null);
    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "/books/" + id, {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<BookResponse>) => {
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

const BookEditView: React.FC = () => {
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
            <div className="max-w-xl mx-auto mt-12">
                <div className="flex justify-center">
                    <div className="w-full mb-24">
                        <BookEditFormCard
                            id={book.id}
                            shelvesName={book.shelves_name}
                            title={book.title}
                            imgUrl={book.img_url}
                            remark={book.remark}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookEditView;