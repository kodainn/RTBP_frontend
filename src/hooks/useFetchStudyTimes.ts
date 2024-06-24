import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";


type StudyTimesResponse = {
    study_minutes_total: number,
    study_minutes_by_monthly: {
        year:          number,
        month:         number,
        study_minutes: number
    }[]
};

export const useFetchStudyTimes = (accessToken: string): StudyTimesResponse | null => {
    const navigate = useNavigate();
    const [ data, setData ] = useState<StudyTimesResponse | null>(null);

    useEffect(() => {
        axios.get(process.env.VITE_API_URL + "/dashboard/study-times", {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<StudyTimesResponse>) => {
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