import { PieChart } from "@mui/x-charts";

const BookStatusCard: React.FC = () => {
    return (
        <div className="w-full bg-white rounded-lg overflow-hidden shadow-xl relative">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-transparent opacity-50"></div>
            <div className="px-4 py-2">
                <div className="flex flex-wrap justify-around">
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">総書籍登録数</h3>
                        <div className="relative">
                            <h4 className="text-xl">30冊</h4>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">棚別書籍登録数</h3>
                        <div className="relative">
                        <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 8, label: 'データベース' },
                                            { id: 1, value: 11, label: 'ネットワーク' },
                                            { id: 2, value: 4, label: 'アルゴリズム' },
                                            { id: 3, value: 2, label: 'web開発概要' },
                                            { id: 4, value: 5, label: 'システム設計' },
                                        ],
                                    },
                                ]}
                                width={400}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookStatusCard;