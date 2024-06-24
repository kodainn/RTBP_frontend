import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";


type StudiedHistoryBooksResponse = {
    book: {
        id:          number,
        shelve_name: string,
        title:       string,
        remark:      string,
        img_url:     string
    },
    studied_histories: {
        id: number,
        start_on:  string,
        target_on: string,
        target_items: {
            id:           number,
            description:  string,
            is_completed: boolean
        }[],
        memo:          string,
        study_minutes: number
    }[]
};


export const useFetchStudiedHistoryBooks = (book_id: string | undefined, accessToken: string): StudiedHistoryBooksResponse | null => {
    const navigate = useNavigate();
    const [ data, setData ] = useState<StudiedHistoryBooksResponse | null>(null);

    useEffect(() => {
        axios.get(process.env.VITE_API_URL + "/studied-history-books/" + book_id, {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res:AxiosResponse<StudiedHistoryBooksResponse>) => {
            if(res.status === 200) {
                setData(res.data);
            }
        })
        .catch((error: AxiosError) => {
            if(error.response?.status === 401) {
                navigate("/login", {state: {message: "ログインしてください。", type: "faild"}});
            }
            if(error.response?.status === 404 || error.response?.status === 422) {
                navigate("/studied-history-books");
            }
        });
    })

    return data;
}