import LinkText from "../parts/LinkText";
import BookFormCard from "../templates/BookFormCard";

const BookCreateView: React.FC = () => {
    return (
        <>
            <div className="mt-6">
                <LinkText
                    link="/shelves"
                    name="< 戻る"
                    size="base"
                />
            </div>
            <div className="max-w-xl mx-auto mt-12">
                <div className="flex justify-center">
                    <div className="w-full mb-24">
                        <BookFormCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookCreateView;