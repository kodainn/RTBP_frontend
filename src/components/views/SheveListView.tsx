import { useEffect, useState } from "react";
import LinkButton from "../parts/LinkButton";
import SearchForm from "../templates/SearchForm";
import SheveInBookCard from "../templates/SheveInBookCard";
import axios from "axios";

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

const fetchShelve = (): ShelveResponse | null => {
    const [ data, setData ] = useState(null);
    useEffect(() => {
        const fetchData = async() => {
            const res = await axios.get(import.meta.env.VITE_API_URL + "/shelves");
            if(res.status === 200) {
                setData(res.data);
            }
        }
        fetchData();
    }, []);

    return data;
}


const SheveListView: React.FC = () => {
    const shelves = fetchShelve();

    if(shelves === null) {
        return <div>loading...</div>;
    }

    return (
        <>
            <div className="mr-12">
                <SearchForm />
            </div>
            <div className="mr-12 mt-16">
                <LinkButton link="/shelves/create" name="棚作成" />
            </div>
            {shelves["shelves"].map((shelve) => {
                return (
                    <div className="mt-16 mb-16">
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