import StudiedBookHistoryCard from "../templates/StudiedBookHistoryCard";

const StudiedBookHistoryListView: React.FC = () => {
    return (
        <div className="mt-24">
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 xl:w-1/3 p-4">
                    <StudiedBookHistoryCard />
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/3 p-4">
                    <StudiedBookHistoryCard />
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/3 p-4">
                    <StudiedBookHistoryCard />
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/3 p-4">
                    <StudiedBookHistoryCard />
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/3 p-4">
                    <StudiedBookHistoryCard />
                </div>
            </div>
        </div>
    );
};

export default StudiedBookHistoryListView;