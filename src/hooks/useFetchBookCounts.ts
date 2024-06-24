import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";


type BookCountsResponse = {
    book_total_count: number,
    book_count_by_shelve: {
        shelve_name: string,
        book_count:  number
    }[]
};


export const useFetchBookCounts = (accessToken: string): BookCountsResponse | null => {
    const navigate = useNavigate();
    const [ data, setData ] = useState<BookCountsResponse | null>(null);

    useEffect(() => {
        axios.get(process.env.VITE_API_URL + "/dashboard/book-counts", {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<BookCountsResponse>) => {
            if(res.status === 200) {
                setData(res.data);
            }
        })
        .catch((error: AxiosError) => {
            if(error.response?.status === 401) {
                navigate("/login", {state: {message: "ログインしてください。", type: "faild"}});
            }
        });
    }, []);

    return data;
}