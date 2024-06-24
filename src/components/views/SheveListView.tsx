import { useState } from "react";
import LinkButton from "../parts/LinkButton";
import SearchForm from "../templates/SearchForm";
import SheveInBookCard from "../templates/SheveInBookCard";
import SuccessAlertMessage from "../parts/SuccessAlertMessage";
import FaildAlertMessage from "../parts/FaildAlertMessage";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useFetchShelves } from "../../hooks/useFetchShelves";





const SheveListView: React.FC = () => {

    const [searchTitle, setSearchTitle] = useState<string>("");

    const changeSearchTitle = (searchTitle: string): void => {
        setSearchTitle(searchTitle);
    }

    const resetSearchTitle = (): void => {
        setSearchTitle("");
    }

    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const shelves = useFetchShelves(searchTitle, accessToken);

    const shelveCreateOrEdit = useLocation().state;

    return (
        <>
            <div className="mr-12">
                <SearchForm
                    changeSearchTitle={changeSearchTitle}
                    resetSearch={resetSearchTitle}
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