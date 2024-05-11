import LinkText from "../parts/LinkText";
import BookCard from "../templates/BookCard";

const BookListView: React.FC = () => {
    return (
        <>
            <div className="mt-6">
                <LinkText
                    link="/shelves"
                    name="< 戻る"
                    size="base"
                />
            </div>
            <div className="mt-24">
                <p className="text-xl ml-12">データベース</p>
                <div className="grid grid-cols-3">
                    <div className="mr-12 ml-12 mt-6 mb-6">
                        <BookCard />
                    </div>
                    <div className="mr-12 ml-12 mt-6 mb-6">
                        <BookCard />
                    </div>
                    <div className="mr-12 ml-12 mt-6 mb-6">
                        <BookCard />
                    </div>
                    <div className="mr-12 ml-12 mt-6 mb-6">
                        <BookCard />
                    </div>
                    <div className="mr-12 ml-12 mt-6 mb-6">
                        <BookCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookListView;