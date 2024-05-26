import { BarChart } from "@mui/x-charts";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useLayoutEffect, useState } from "react";

type Props = {
    studyMinutesTotal: number,
    studyMinutesByMonthly: {
        year:         number,
        month:        number,
        study_minutes: number
    }[]
};

const minutesToHour = (minutes: number) => {
    return minutes / 60;
}

const StudyingStatusCard: React.FC<Props> = ({
    studyMinutesTotal, studyMinutesByMonthly
}) => {
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

    const studyTotalHour: number = Math.floor(minutesToHour(studyMinutesTotal) * 10) / 10;

    let studyHourByMonthly: number[] = studyMinutesByMonthly.map((v) => v["study_minutes"] / 60);
    

    return (
        <div className="w-full bg-white rounded-lg overflow-hidden shadow-xl">
            <div className="px-4 py-2">
                <div className="flex flex-wrap justify-around">
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">総勉強時間</h3>
                        <div className="relative">
                            <h4 className="text-xl">{studyTotalHour}時間</h4>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">学習時間グラフ</h3>
                        <div className="relative">
                            <BarChart
                                width={chartWidth}
                                height={400}
                                series={[
                                    { data: studyHourByMonthly },
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