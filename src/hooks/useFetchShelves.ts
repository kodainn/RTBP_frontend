import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

type ShelveResponse = {
    shelves: {
        id:   number,
        name: string,
        books: {
            id:      number,
            title:   string,
            img_url: string
        }[];
    }[];
};

export const useFetchShelves = (searchTitle: string, accessToken: string): ShelveResponse | null => {
    const navigate = useNavigate();
    const [ data, setData ] = useState<ShelveResponse | null>(null);
    useEffect(() => {
        setData(null);
        axios.get(process.env.VITE_API_URL + "/shelves?title=" + searchTitle, {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<ShelveResponse>) => {
            if(res.status === 200) {
                setData(res.data);
            }
        })
        .catch((error: AxiosError) => {
            if(error.response?.status === 401) {
                navigate("/login", {state: {message: "ログインしてください。", type: "faild"}});
            }
        });
    }, [searchTitle]);

    return data;
}