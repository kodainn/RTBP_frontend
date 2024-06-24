import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError, AxiosResponse } from "axios";

type shelvesIdBooksResponse = {
    id:   number,
    name: string,
    books: {
        id:      number,
        title:   string,
        img_url: string
    }[];
};


export const useFetchSlevesIdBooks = (id: string | undefined, accessToken: string): shelvesIdBooksResponse | null => {
    const navigate = useNavigate();
    const [ data, setData ] = useState<shelvesIdBooksResponse | null>(null);

    useEffect(() => {
        axios.get(process.env.VITE_API_URL + "/shelves/" + id + "/books", {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<shelvesIdBooksResponse>) => {
            if(res.status === 200) {
                setData(res.data);
            }
        })
        .catch((error: AxiosError) => {
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