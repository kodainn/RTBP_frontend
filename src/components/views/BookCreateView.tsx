import LinkText from "../parts/LinkText";
import BookCreateFormCard from "../templates/BookCreateFormCard";

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
                        <BookCreateFormCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookCreateView;