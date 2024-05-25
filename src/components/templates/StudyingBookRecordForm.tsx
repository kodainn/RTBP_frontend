import Button from "../parts/Button";
import CheckBox from "../parts/CheckBox";
import InputField from "../parts/InputField";
import Label from "../parts/Label";
import InputTextArea from "../parts/InputTextArea";

const StudyingBookRecordForm: React.FC = () => {
    return (
        <div className="bg-white max-w-xl rounded overflow-hidden shadow-lg">
            <dl className="max-w-md divide-y divide-gray-500 ml-6 mt-6 mb-6">
                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-700 md:text-lg">学習期限</dt>
                    <dd className="text-lg font-semibold">2024年5月1日まで</dd>
                </div>
                <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500 md:text-lg">目標設定</dt>
                    <dd className="text-lg font-semibold">
                        <div className="flex items-center mb-2">
                            <div className="mr-3">
                                <CheckBox isCheck={true} />
                            </div>
                            <div>
                                <Label name="PHPの基礎文法を理解する" size="base" />
                            </div>
                        </div>
                        <div className="flex items-center mb-2">
                            <div className="mr-3">
                                <CheckBox />
                            </div>
                            <div>
                                <Label name="web開発の基礎を理解する" size="base" />
                            </div>
                        </div>
                    </dd>
                </div>
                <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-gray-500 md:text-lg">勉強時間</dt>
                    <dd className="text-lg font-semibold">
                        <InputField type="time" />
                    </dd>
                </div>
                <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-gray-500 md:text-lg">メモ</dt>
                    <dd className="text-lg font-semibold">
                        <InputTextArea />
                    </dd>
                </div>
                <div className="px-6 pb-2 pt-6 mb-8">
                    <Button isWeightFull={true} name="記録" />
                </div>
            </dl>
        </div>
    );
};

export default StudyingBookRecordForm;