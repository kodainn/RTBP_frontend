import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";


type ShelveResponse = {
    id:   number,
    name: string
}


export const useFetchShelve = (id: string | undefined, accessToken: string): ShelveResponse | null => {
    const navigate = useNavigate();
    const [ data, setData ] = useState<ShelveResponse | null>(null);

    useEffect(() => {
        axios.get(process.env.VITE_API_URL + "/shelves/" + id, {
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
            if(error.response?.status === 404 || error.response?.status === 422) {
                navigate("/shelves");
            }
            if(error.response?.status === 500) {
                navigate("/shelves");
            }
        });
    }, [])

    return data;
}