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
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 xl:w-1/3 p-4">
                        <BookCard />
                    </div>
                    <div className="w-full sm:w-1/2 xl:w-1/3 p-4">
                        <BookCard />
                    </div>
                    <div className="w-full sm:w-1/2 xl:w-1/3 p-4">
                        <BookCard />
                    </div>
                    <div className="w-full sm:w-1/2 xl:w-1/3 p-4">
                        <BookCard />
                    </div>
                    <div className="w-full sm:w-1/2 xl:w-1/3 p-4">
                        <BookCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookListView;