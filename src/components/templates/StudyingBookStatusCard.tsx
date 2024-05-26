import { PieChart } from "@mui/x-charts";
import { format } from "date-fns";

type Props = {
    studyBooksCompletedCount:  number,
    studyBooksIncompleteCount: number,
    startStudyPeriodOn:        Date,
    endStudyPeriodOn:          Date
}

const studyComplatedPercent = (studyBooksCompletedCount: number, studyBooksIncompleteCount: number) => {
    if (studyBooksCompletedCount + studyBooksIncompleteCount === 0) {
        return 0;
    }
    return studyBooksCompletedCount / (studyBooksCompletedCount + studyBooksIncompleteCount);
}

const StudyingBookStatusCard: React.FC<Props> = ({
    studyBooksCompletedCount, studyBooksIncompleteCount, startStudyPeriodOn, endStudyPeriodOn
}) => {

    const studyCompletedPercent = studyComplatedPercent(studyBooksCompletedCount, studyBooksIncompleteCount);

    return (
        <div className="w-full bg-white rounded-lg overflow-hidden shadow-xl relative">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-transparent opacity-50">
                <div className="text-lg font-semibold text-gray-800 mb-4">
                    { format(startStudyPeriodOn, 'yyyy年MM月dd日') + "から" + format(endStudyPeriodOn, 'yyyy年MM月dd日') }
                </div>
            </div>
            <div className="px-4 py-2">
                <div className="flex flex-wrap justify-around">
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">目標達成率</h3>
                        <div className="relative">
                            {studyBooksIncompleteCount === 0 && studyBooksCompletedCount === 0 ? (
                                <div>学習書籍が登録されていません。</div>
                            ) : (
                                <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: studyBooksIncompleteCount, label: '学習未完了' },
                                            { id: 1, value: studyBooksCompletedCount, label: '学習完了' },
                                        ],
                                    },
                                ]}
                                width={400}
                                height={200}
                                />
                            )}
                            {studyCompletedPercent}%
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">学習完了書籍数</h3>
                        <div className="relative">
                            <h4 className="text-xl px-12">{studyBooksCompletedCount}冊</h4>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">学習未完了書籍数</h3>
                        <div className="relative">
                            <h4 className="text-xl px-12">{studyBooksIncompleteCount}冊</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyingBookStatusCard;