import StudyingBookCard from "../templates/StudyingBookCard";

const StudyingBookListView: React.FC = () => {

    return (
        <div className="mt-24">
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 xl:w-1/3 p-4">
                    <StudyingBookCard />
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/3 p-4">
                    <StudyingBookCard />
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/3 p-4">
                    <StudyingBookCard />
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/3 p-4">
                    <StudyingBookCard />
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/3 p-4">
                    <StudyingBookCard />
                </div>
            </div>
        </div>
    );
};

export default StudyingBookListView;