import BookDetailCard from "../templates/BookDetailCard";
import StudiedBookHistoryDetailCard from "../templates/StudiedBookHistoryDetailCard";

const StudiedBookHistoryShowView: React.FC = () => {
    return (
        <div className="max-w-xl mx-auto">
            <div className="flex justify-center mt-12 mb-12">
                <div className="w-full">
                    <BookDetailCard />
                </div>
            </div>
            <div className="flex justify-center mb-6 mt-6">
                <div className="w-full">
                    <StudiedBookHistoryDetailCard />
                </div>
            </div>
            <div className="flex justify-center mb-6 mt-6">
                <div className="w-full">
                    <StudiedBookHistoryDetailCard />
                </div>
            </div>
        </div>
    );
};

export default StudiedBookHistoryShowView;