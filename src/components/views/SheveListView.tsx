import { useEffect, useState } from "react";
import LinkButton from "../parts/LinkButton";
import SearchForm from "../templates/SearchForm";
import SheveInBookCard from "../templates/SheveInBookCard";
import axios, { AxiosError, AxiosResponse } from "axios";
import SuccessAlertMessage from "../parts/SuccessAlertMessage";
import FaildAlertMessage from "../parts/FaildAlertMessage";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


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

const fetchShelve = (searchTitle: string, accessToken: string, navigate: NavigateFunction): ShelveResponse | null => {
    const [ data, setData ] = useState(null);
    useEffect(() => {
        setData(null);
        axios.get(import.meta.env.VITE_API_URL + "/shelves?title=" + searchTitle, {
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
        });
    }, [searchTitle]);

    return data;
}


const SheveListView: React.FC = () => {

    const [searchTitle, setSearchTitle] = useState<string>("");

    const changeSearchTitle = (searchTitle: string) => {
        setSearchTitle(searchTitle);
    }

    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;
    const navigate = useNavigate();

    const shelves = fetchShelve(searchTitle, accessToken, navigate);

    const shelveCreateOrEdit = useLocation().state;

    return (
        <>
            <div className="mr-12">
                <SearchForm
                    changeSearchTitle={changeSearchTitle}
                />
            </div>
            <div className="w-[60%]">
                {shelveCreateOrEdit !== null && shelveCreateOrEdit.type === "success" && <SuccessAlertMessage message={shelveCreateOrEdit.message} />}
                {shelveCreateOrEdit !== null && shelveCreateOrEdit.type === "faild" && <FaildAlertMessage message={shelveCreateOrEdit.message} />}
            </div>
            <div className="mr-12 mt-16">
                <LinkButton link="/shelves/create" name="棚作成" />
            </div>
            {shelves === null && <div className="mt-16 mb-16">loading...</div>}
            {shelves && shelves["shelves"].length === 0 && <div className="mt-16 mb-16">本棚情報がありません。</div>}
            {shelves && shelves["shelves"].map((shelve) => {
                return (
                    <div key={shelve.id} className="mt-16 mb-16">
                        <SheveInBookCard
                            id={shelve.id}
                            name={shelve.name}
                            books={shelve.books}
                        />
                    </div>
                );
            })}
        </>
    );
};

export default SheveListView;