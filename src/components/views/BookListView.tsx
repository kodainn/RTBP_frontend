import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

import LinkText from "../parts/LinkText";
import BookCard from "../templates/BookCard";
import { isNumber } from "../../utils/numberCheck";


type shelvesIdBooksResponse = {
    id:   number,
    name: string,
    books: {
        id:      number,
        title:   string,
        img_url: string
    }[];
};


const fetchSlevesIdBooksResponse = (id: string | undefined): shelvesIdBooksResponse | null => {
    const [ data, setData ] = useState<shelvesIdBooksResponse | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async() => {
            await axios.get(import.meta.env.VITE_API_URL + "/shelves/" + id + "/books")
            .then((res: AxiosResponse) => {
                if(res.status === 200) {
                    setData(res.data);
                }
            })
            .catch((error: any) => {
                if(error.response?.status === 404) {
                    navigate("/shelves");
                };
            });
        }
        if (!isNumber(id)) {
            navigate("/shelves");
        } else {
            fetchData();
        }
    }, [])

    return data;
}


const BookListView: React.FC = () => {
    let { id } = useParams();
    const shelvesIdBooks = fetchSlevesIdBooksResponse(id);

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