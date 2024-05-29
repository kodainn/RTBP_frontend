import { useEffect, useState } from "react";
import LinkText from "../parts/LinkText";
import BookCreateFormCard from "../templates/BookCreateFormCard";
import axios, { AxiosError, AxiosResponse } from "axios";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

type ShelveResponse = {
    id:   number,
    name: string
}


const fetchShelve = (id: string | undefined, accessToken: string, navigate: NavigateFunction): ShelveResponse | null => {
    const [ data, setData ] = useState<ShelveResponse | null>(null);

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "/shelves/" + id, {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<any>) => {
            if(res.status === 200) {
                setData(res.data);
            }
        })
        .catch((error: AxiosError<any>) => {
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

const BookCreateView: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const shelve = fetchShelve(id, accessToken, navigate);

    if(shelve === null) {
        return <></>;
    }

    return (
        <>
            <div className="mt-6">
                <LinkText
                    link="/shelves"
                    name="< 戻る"
                    size="base"
                />
            </div>
            <div className="max-w-xl mx-auto mt-12">
                <div className="flex justify-center">
                    <div className="w-full mb-24">
                        <BookCreateFormCard
                            id={shelve.id}
                            name={shelve.name}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookCreateView;