import Button from "../parts/Button";
import InputField from "../parts/InputField";

const SearchForm: React.FC = () => {
    return (
        <div className="flex items-center">
            <div className="w-[70%] mr-6">
                <InputField placeholder="書籍名で検索"/>
            </div>
            <div className="mb-2">
                <Button name="検索"/>
            </div>
        </div>
    );
};

export default SearchForm;