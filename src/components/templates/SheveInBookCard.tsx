import LinkText from "../parts/LinkText";
import BookCard from "./BookCard";

const SheveInBookCard: React.FC = () => {
    return (
        <>
            <div className="flex justify-between mr-12 mb-4">
                <p className="text-xl">データベース</p>
                <LinkText
                    link="/shelve/1/books"
                    name="すべて表示する >"
                    size="base"
                />
            </div>
            <div className="overflow-x-auto">
                <div className="flex">
                    <div className="flex-shrink-0 max-w-xs mr-12 mb-6">
                        <BookCard />
                    </div>
                    <div className="flex-shrink-0 max-w-xs mr-12 mb-6">
                        <BookCard />
                    </div>
                    <div className="flex-shrink-0 max-w-xs mr-12 mb-6">
                        <BookCard />
                    </div>
                    <div className="flex-shrink-0 max-w-xs mr-12 mb-6">
                        <BookCard />
                    </div>
                    <div className="flex-shrink-0 max-w-xs mr-12 mb-6">
                        <BookCard />
                    </div>
                    <div className="flex-shrink-0 max-w-xs mr-12 mb-6">
                        <BookCard />
                    </div>
                    <div className="flex-shrink-0 max-w-xs mr-12 mb-6">
                        <BookCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SheveInBookCard;