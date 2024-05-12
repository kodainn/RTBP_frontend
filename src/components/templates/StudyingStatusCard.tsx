import { BarChart } from "@mui/x-charts";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useLayoutEffect, useState } from "react";

const StudyingStatusCard: React.FC = () => {

    const { windowWidth } = useWindowSize();
    const [ chartWidth, setChartWidth ] = useState<number>(900);

    useLayoutEffect(() => {
        if(windowWidth <= 1000) {
            setChartWidth(300);
        } else if(windowWidth <= 1200) {
            setChartWidth(500);
        } else if(windowWidth <= 1400) {
            setChartWidth(700);
        }
    }, [windowWidth]);

    return (
        <div className="w-full bg-white rounded-lg overflow-hidden shadow-xl">
            <div className="px-4 py-2">
                <div className="flex flex-wrap justify-around">
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">総勉強時間</h3>
                        <div className="relative">
                            <h4 className="text-xl">1000時間</h4>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">学習時間グラフ</h3>
                        <div className="relative">
                            <BarChart
                                width={chartWidth}
                                height={400}
                                series={[
                                    { data: [30, 30, 11, 43, 12, 43, 11, 12, 65, 34, 11, 20], label: '第1週', id: '1', stack: 'total' },
                                    { data: [20, 20, 53, 12, 45, 34, 22, 11, 20, 53, 12, 23], label: '第2週', id: '2', stack: 'total' },
                                    { data: [100, 100, 32, 65, 11, 11, 33, 100, 100, 32, 65, 11], label: '第3週', id: '3', stack: 'total' },
                                    { data: [4, 100, 12, 12, 67, 56, 11, 100, 12, 12, 67, 56], label: '第4週', id: '4', stack: 'total' },
                                ]}
                                xAxis={[{ data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], scaleType: 'band' }]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyingStatusCard;