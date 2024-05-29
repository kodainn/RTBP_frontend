import { useState, useEffect } from "react";
import { NavigateFunction, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError, AxiosResponse } from "axios";

import LinkText from "../parts/LinkText";
import BookCard from "../templates/BookCard";
import { useCookies } from "react-cookie";


type shelvesIdBooksResponse = {
    id:   number,
    name: string,
    books: {
        id:      number,
        title:   string,
        img_url: string
    }[];
};


const fetchSlevesIdBooksResponse = (id: string | undefined, accessToken: string, navigate: NavigateFunction): shelvesIdBooksResponse | null => {
    const [ data, setData ] = useState<shelvesIdBooksResponse | null>(null);

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "/shelves/" + id + "/books", {
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
            if(error.response?.status === 422 || error.response?.status === 404) {
                navigate("/shelves");
            }
        });
    }, []);

    return data;
}


const BookListView: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const shelvesIdBooks = fetchSlevesIdBooksResponse(id, accessToken, navigate);

    if(shelvesIdBooks === null) {
        return <div>loading...</div>;
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
            <div className="mt-24">
                <p className="text-xl ml-12">{shelvesIdBooks.name}</p>
                <div className="flex flex-wrap">
                    {shelvesIdBooks["books"].map((book) => {
                        return (
                            <div key={book.id} className="w-full sm:w-1/2 xl:w-1/3 p-4">
                                <BookCard
                                    id={book.id}
                                    title={book.title}
                                    imgUrl={book.img_url}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default BookListView;