import Button from "../parts/Button";
import InputField from "../parts/InputField";
import Label from "../parts/Label";

const StudyBookFormCard: React.FC = () => {
    return (
        <div className="bg-white max-w-xl rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">目標設定</div>
            </div>
            <div className="px-6 pb-2">
                <InputField placeholder="学習での目標を設定する"/>
                <Button name="+" />
            </div>
            <div className="px-6 pb-2 pt-6">
                <Label name="目標達成日" size="base" />
                <InputField type="date" />
            </div>
            <div className="px-6 pb-2 pt-6 mb-8">
                <Button isWeightFull={true} name="登録" />
            </div>
        </div>
    );
};

export default StudyBookFormCard;