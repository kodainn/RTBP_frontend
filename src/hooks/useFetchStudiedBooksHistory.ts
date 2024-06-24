import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

type StudiedBooksHistoryResponse = {
    studied_history_books: {
        book_id:       number,
        title:         string,
        img_url:       string,
        studied_count: number
    }[]
};

export const useFetchStudiedBooksHistory = (accessToken: string): StudiedBooksHistoryResponse | null => {
    const navigate = useNavigate();
    const [ data ,setData ] = useState<StudiedBooksHistoryResponse | null>(null);
    useEffect(() => {
        axios.get(process.env.VITE_API_URL + "/studied-history-books", {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<StudiedBooksHistoryResponse>) => {
            if(res.status === 200) {
                setData(res.data);
            }
        })
        .catch((error: AxiosError) => {
            if(error.response?.status === 401) {
                navigate("/login", {state: {message: "ログインしてください。", type: "faild"}});
            }
        });
    });

    return data;
}