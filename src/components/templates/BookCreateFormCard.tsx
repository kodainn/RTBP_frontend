import Button from "../parts/Button";
import InputField from "../parts/InputField";
import InputFile from "../parts/InputFile";
import InputTextArea from "../parts/InputTextArea";
import Label from "../parts/Label";
import phpBookImage from "../../assets/php.jpg";

const BookCreateFormCard: React.FC = () => {
    return (
        <div className="bg-white max-w-xl rounded overflow-hidden shadow-lg">
            <div className="px-6 pb-2 mt-8">
                <Label name="ISBN" size="base" />
                <InputField />
            </div>
            <div className="px-6 pb-2">
                <Button name="ISBNで検索" />
            </div>
            <div className="px-6 pb-2">
                <Label name="タイトル" size="base" />
                <InputField />
            </div>
            <div className="px-6 pb-2">
                <Label name="ジャンル" size="base" />
                <InputField />
            </div>
            <div className="px-6 pb-2">
                <Label name="備考" size="base" />
                <InputTextArea />
            </div>
            <div className="px-6 pb-2">
                <Label name="画像" size="base" />
                <InputFile />
                <div className="flex justify-center mt-6">
                    <img className="w-[50%]" src={phpBookImage} alt="本の画像" />
                </div>
            </div>
            <div className="px-6 pb-2 pt-6 mb-8">
                <Button isWeightFull={true} name="作成" />
            </div>
        </div>
    );
};

export default BookCreateFormCard;