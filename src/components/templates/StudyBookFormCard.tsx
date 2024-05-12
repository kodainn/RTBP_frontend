import Button from "../parts/Button";
import InputDate from "../parts/InputDate";
import InputText from "../parts/InputText";
import Label from "../parts/Label";

const StudyBookFormCard: React.FC = () => {
    return (
        <div className="max-w-xl rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">目標設定</div>
            </div>
            <div className="px-6 pb-2">
                <InputText placeholder="学習での目標を設定する"/>
                <Button name="+" />
            </div>
            <div className="px-6 pb-2 pt-6">
                <Label name="目標達成日" size="base" />
                <InputDate />
            </div>
        </div>
    );
};

export default StudyBookFormCard;