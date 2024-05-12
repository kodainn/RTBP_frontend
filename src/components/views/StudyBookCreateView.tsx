import BookDetailCard from "../templates/BookDetailCard";
import StudyBookFormCard from "../templates/StudyBookFormCard";

const StudyBookCreateView: React.FC = () => {
    return (
        <div className="max-w-xl mx-auto">
            <div className="flex justify-center mt-12 mb-12">
                <div className="w-full">
                    <BookDetailCard />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-full">
                    <StudyBookFormCard />
                </div>
            </div>
        </div>
    );
};

export default StudyBookCreateView;