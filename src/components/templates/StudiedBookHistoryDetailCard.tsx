import CheckBox from "../parts/CheckBox";
import Label from "../parts/Label";
import { format } from "date-fns";

type Props = {
    startOn:  string,
    targetOn: string,
    targetItems: {
        id:           number,
        description:  string,
        is_completed: boolean
    }[],
    memo:         string,
    studyMinutes: number
}

const minutesToHour = (minutes: number) => {
    return minutes / 60;
}

const StudiedBookHistoryDetailCard: React.FC<Props> = ({ startOn, targetOn, targetItems, memo, studyMinutes }) => {

    const studyTotalHour: number = Math.floor(minutesToHour(studyMinutes) * 10) / 10;

    return (
        <div className="bg-white max-w-xl rounded overflow-hidden shadow-lg">
            <dl className="max-w-md divide-y divide-gray-500 ml-6 mt-6 mb-6">
                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-700 md:text-lg">学習期間</dt>
                    <dd className="text-lg font-semibold">{format(startOn, "yyyy年MM月dd日")}から{format(targetOn, "yyyy年MM月dd日")}まで</dd>
                </div>
                <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500 md:text-lg">目標設定</dt>
                    <dd className="text-lg font-semibold">
                        {targetItems.map((targetItem) => {
                            return (
                                <div className="flex">
                                    <div className="mr-3">
                                        <CheckBox isCheck={targetItem.is_completed} disabled={true} />
                                    </div>
                                    <div>
                                        <Label name={targetItem.description} size="base" />
                                    </div>
                                </div>
                            );
                        })}
                    </dd>
                </div>
                <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-gray-500 md:text-lg">メモ</dt>
                    <dd className="text-lg font-semibold">{memo}</dd>
                </div>
                <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-gray-500 md:text-lg">総勉強時間</dt>
                    <dd className="text-lg font-semibold">{studyTotalHour}時間</dd>
                </div>
            </dl>
        </div>
    );
};

export default StudiedBookHistoryDetailCard;