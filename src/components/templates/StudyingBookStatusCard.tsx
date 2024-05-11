import { PieChart } from "@mui/x-charts";

const StudyingBookStatusCard: React.FC = () => {
    return (
        <div className="w-full bg-white rounded-lg overflow-hidden shadow-xl relative">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-transparent opacity-50"></div>
            <div className="px-4 py-2">
                <div className="grid grid-cols-3 gap-4">
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">目標達成率</h3>
                        <div className="relative">
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 3, label: '学習未完了' },
                                            { id: 1, value: 7, label: '学習完了' },
                                        ],
                                    },
                                ]}
                                width={400}
                                height={200}
                            />
                        </div>
                        {3 / 10}%
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">学習完了書籍数</h3>
                        <div className="relative">
                            <h4 className="text-xl px-12">7冊</h4>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">学習完了書籍数</h3>
                        <div className="relative">
                            <h4 className="text-xl px-12">3冊</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyingBookStatusCard;