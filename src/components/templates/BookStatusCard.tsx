import { PieChart } from "@mui/x-charts";

type Props = {
    bookTotalCount: number,
    bookCountByShelve: {
        shelve_name: string,
        book_count: number
    }[]
}

const conversionToPieChartData = (bookCountShelve: { shelve_name: string, book_count: number }[]) => {
    let data: any[] = [];
    for (let index = 0; index < bookCountShelve.length; index++) {
        data.push({
            id: index,
            value: bookCountShelve[index].book_count,
            label: bookCountShelve[index].shelve_name
        });
    }

    return data;
}

const chartWidth = (bookCount: number) => {
    return 100 + (300 * Math.ceil(bookCount / 6));
}


const BookStatusCard: React.FC<Props> = ({ bookTotalCount, bookCountByShelve }) => {

    const pieChartData = conversionToPieChartData(bookCountByShelve);

    return (
        <div className="w-full bg-white rounded-lg overflow-hidden shadow-xl relative">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-transparent opacity-50"></div>
            <div className="px-4 py-2">
                <div className="flex flex-wrap justify-around">
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">総書籍登録数</h3>
                        <div className="relative">
                            <h4 className="text-xl">{bookTotalCount}冊</h4>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">棚別書籍登録数</h3>
                        <div className="relative">
                            {bookCountByShelve.length === 0 ? (
                                <div className="text-xl">書籍が登録されていません。</div>
                            ) : (
                                <PieChart
                                    series={[
                                        { data: pieChartData },
                                    ]}
                                    width={chartWidth(bookCountByShelve.length)}
                                    height={200}
                                />
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookStatusCard;