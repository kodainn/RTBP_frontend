import Button from "../parts/Button";
import InputField from "../parts/InputField";
import Label from "../parts/Label";

const ShelveEditFormCard: React.FC = () => {
    return (
        <div className="bg-white max-w-xl rounded overflow-hidden shadow-lg">
            <div className="px-6 pb-2 mt-8">
                <Label name="棚名" size="base" />
                <InputField />
            </div>
            <div className="px-6 pb-2 pt-6 mb-8">
                <Button isWeightFull={true} name="編集" />
            </div>
        </div>
    );
};

export default ShelveEditFormCard;