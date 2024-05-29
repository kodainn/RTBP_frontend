import LinkText from "../parts/LinkText";
import ShelveEditFormCard from "../templates/ShelveEditFormCard";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useCookies } from "react-cookie";

type ShelveResponse = {
    id:   number,
    name: string
}


const fetchShelve = (id: string | undefined, accessToken: string, navigate: NavigateFunction): ShelveResponse | null => {
    const [ data, setData ] = useState<ShelveResponse | null>(null);

    useEffect(() => {
        axios.get(process.env.VITE_API_URL + "/shelves/" + id, {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse) => {
            if(res.status === 200) {
                setData(res.data);
            }
        })
        .catch((error: any) => {
            if(error.response?.status === 401) {
                navigate("/login", {state: {message: "ログインしてください。", type: "faild"}});
            }
            if(error.response?.status === 404 || error.response?.status === 422) {
                navigate("/shelves");
            }
        });
    }, [])

    return data;
}


const ShelveEditView: React.FC = () => {

    const { id } = useParams();
    const navigate = useNavigate();
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
                        <ShelveEditFormCard
                            id={shelve.id}
                            name={shelve.name}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShelveEditView;