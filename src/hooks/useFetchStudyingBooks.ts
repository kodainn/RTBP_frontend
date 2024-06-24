import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

type StudyingBooksResponse = {
    studying_books: {
        id:        number,
        title:     string,
        img_url:   string,
        start_on:  Date,
        target_on: Date
    }[];
};


export const useFetchStudyingBooks = (accessToken: string): StudyingBooksResponse | null => {
    const navigate = useNavigate();
    const [ data, setData ] = useState<StudyingBooksResponse | null>(null);
    useEffect(() => {
        axios.get(process.env.VITE_API_URL + "/studying-books", {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<StudyingBooksResponse>) => {
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