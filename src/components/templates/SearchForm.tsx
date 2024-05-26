import { ChangeEvent, useState } from "react";
import Button from "../parts/Button";
import InputField from "../parts/InputField";

type Props = {
    changeSearchTitle: (searchTitle: string) => void;
};

const SearchForm: React.FC<Props> = ({changeSearchTitle}) => {

    const [ searchInput, setSearchInput ] = useState<string>("");
    const changeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    }

    const clickChangeSearchTitle = () => {
        changeSearchTitle(searchInput);
    }

    return (
        <div className="flex items-center">
            <div className="w-[70%] mr-6">
                <InputField
                    onChange={changeSearchInput}
                    placeholder="書籍名で検索"
                />
            </div>
            <div className="mb-2">
                <Button
                    onClick={clickChangeSearchTitle}
                    name="検索"
                />
            </div>
        </div>
    );
};

export default SearchForm;