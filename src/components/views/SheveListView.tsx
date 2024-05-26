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

const fetchShelve = (searchTitle: string): ShelveResponse | null => {
    const [ data, setData ] = useState(null);
    useEffect(() => {
        setData(null);
        const fetchData = async() => {
            const res = await axios.get(import.meta.env.VITE_API_URL + "/shelves?title=" + searchTitle);
            if(res.status === 200) {
                setData(res.data);
            }
        }
        fetchData();
    }, [searchTitle]);

    return data;
}


const SheveListView: React.FC = () => {

    const [searchTitle, setSearchTitle] = useState<string>("");

    const changeSearchTitle = (searchTitle: string) => {
        setSearchTitle(searchTitle);
    }

    const shelves = fetchShelve(searchTitle);

    return (
        <>
            <div className="mr-12">
                <SearchForm
                    changeSearchTitle={changeSearchTitle}
                />
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