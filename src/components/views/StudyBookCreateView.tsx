import LinkText from "../parts/LinkText";
import BookDetailCard from "../templates/BookDetailCard";
import StudyBookFormCard from "../templates/StudyBookFormCard";

const StudyBookCreateView: React.FC = () => {
    return (
        <>
            <div className="mt-6">
                <LinkText
                    link="/shelves"
                    name="< 戻る"
                    size="base"
                />
            </div>
            <div className="max-w-xl mx-auto">
            <div className="flex justify-center mt-12 mb-12">
                <div className="w-full">
                    <BookDetailCard />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-full mb-24">
                    <StudyBookFormCard />
                </div>
            </div>
        </div>
        </>
    );
};

export default StudyBookCreateView;