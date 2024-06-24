import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

type BookResponse = {
    id:           number,
    shelve_name:  string,
    title:        string,
    remark:       string,
    img_url:      string
}

export const useFetchBook = (id: string | undefined, accessToken: string): BookResponse | null => {
    const navigate = useNavigate();

    const [ data, setData ] = useState<BookResponse | null>(null);
    useEffect(() => {
        axios.get(process.env.VITE_API_URL + "/books/" + id, {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<BookResponse>) => {
            if(res.status === 200) {
                setData(res.data);
            }
        })
        .catch((error: AxiosError) => {
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