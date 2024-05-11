import StudyingBookCard from "../templates/StudyingBookCard";

const StudyingBookListView: React.FC = () => {
    return (
        <div className="mt-24">
                <div className="grid grid-cols-3">
                    <div className="mr-12 ml-12 mt-6 mb-6">
                        <StudyingBookCard />
                    </div>
                    <div className="mr-12 ml-12 mt-6 mb-6">
                        <StudyingBookCard />
                    </div>
                    <div className="mr-12 ml-12 mt-6 mb-6">
                        <StudyingBookCard />
                    </div>
                    <div className="mr-12 ml-12 mt-6 mb-6">
                        <StudyingBookCard />
                    </div>
                    <div className="mr-12 ml-12 mt-6 mb-6">
                        <StudyingBookCard />
                    </div>
                </div>
            </div>
    );
};

export default StudyingBookListView;