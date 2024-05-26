import { useEffect, useState } from "react";
import LinkText from "../parts/LinkText";
import BookCreateFormCard from "../templates/BookCreateFormCard";
import axios, { AxiosResponse } from "axios";
import { useNavigate, useParams } from "react-router-dom";

type ShelveResponse = {
    id:   number,
    name: string
}


const fetchShelve = (id: string | undefined): ShelveResponse | null => {
    const [ data, setData ] = useState<ShelveResponse | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async() => {
            await axios.get(import.meta.env.VITE_API_URL + "/shelves/" + id)
            .then((res: AxiosResponse) => {
                if(res.status === 200) {
                    setData(res.data);
                }
            })
            .catch((error: any) => {
                if(error.response?.status === 422) {
                    navigate("/shelves");
                }
                if(error.response?.status === 404) {
                    navigate("/shelves");
                }
                if(error.response?.status === 500) {
                    navigate("/shelves");
                }
            });
        }
        fetchData();
    }, [])

    return data;
}

const BookCreateView: React.FC = () => {
    const { id } = useParams();

    const shelve = fetchShelve(id);

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