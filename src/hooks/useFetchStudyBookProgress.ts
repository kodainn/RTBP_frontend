import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

type StudyBookProgressResponse = {
    study_books_completed_count:  number,
    study_books_incomplete_count: number,
    start_study_period_on:        string,
    end_study_period_on:          string
};

export const useFetchStudyBookProgress = (accessToken: string): StudyBookProgressResponse | null => {
    const navigate = useNavigate();

    const [ data, setData ] = useState<StudyBookProgressResponse | null>(null);

    useEffect(() => {
        axios.get(process.env.VITE_API_URL + "/dashboard/study-book-progress", {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<StudyBookProgressResponse>) => {
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
}; 