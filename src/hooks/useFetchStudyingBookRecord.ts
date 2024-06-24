import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

type StudyingBooksResponse = {
    book: {
        id:          number,
        shelve_name: string,
        title:       string,
        remark:      string,
        img_url:     string
    },
    studying_book: {
        id:        number,
        start_on:  string,
        target_on: string,
        memo:      string,
        target_items: {
            id:           number,
            description:  string,
            is_completed: boolean
        }[]
    }
};


export const useFetchStudyingBookRecord = (id: string | undefined, accessToken: string): StudyingBooksResponse | null => {
    const navigate = useNavigate();
    const [ data, setData ] = useState<StudyingBooksResponse | null>(null);

    useEffect(() => {
        axios.get(process.env.VITE_API_URL + "/studying-books/" + id, {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res:AxiosResponse<StudyingBooksResponse>) => {
            if(res.status === 200) {
                setData(res.data);
            }
        })
        .catch((error: AxiosError) => {
            if(error.response?.status === 401) {
                navigate("/login", {state: {message: "ログインしてください。", type: "faild"}});
            }
            if(error.response?.status === 404 || error.response?.status === 422) {
                navigate("/studying-books");
            }
            if(error.response?.status === 500) {
                navigate("/studying-books");
            }
        });
    }, []);

    return data;
}