import LinkButton from "../parts/LinkButton";
import LinkPlusCard from "../parts/LinkPlusCard";
import LinkText from "../parts/LinkText";
import BookCard from "./BookCard";

const SheveInBookCard: React.FC = () => {
    return (
        <>
            <div className="flex justify-between mr-12 mb-4">
                <div className="flex items-center">
                    <p className="text-xl mr-6">データベース</p>
                    <LinkButton
                        link="/shelve/1/edit"
                        name="棚編集"
                    />
                </div>
                <LinkText
                    link="/shelve/1/books"
                    name="すべて表示する >"
                    size="base"
                />
            </div>
            <div className="overflow-x-auto">
                <div className="flex">
                    <div className="flex-shrink-0 max-w-xs mr-12 mb-6">
                        <LinkPlusCard link="/book/create" />
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
                    <div className="flex-shrink-0 max-w-xs mr-12 mb-6">
                        <BookCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SheveInBookCard;