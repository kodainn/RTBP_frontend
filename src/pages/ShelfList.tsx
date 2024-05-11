import SidebarView from "../components/views/SidebarView";
import BookCard from "../components/templates/BookCard";
import LinkText from "../components/parts/LinkText";

const ShelfList: React.FC = () => {
    return (
        <>
            <SidebarView />
            <div className="p-4 sm:ml-64">
                <div className="mt-24">
                    <div className="flex justify-between mr-12">
                        <p className="text-xl">データベース</p>
                        <LinkText
                            link="/shelve/1/books"
                            name="すべて表示する >"
                            size="base"
                        />
                    </div>
                    <div className="overflow-x-auto ">
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
                </div>
                <div className="mt-24">
                    <div className="flex justify-between mr-12">
                        <p className="text-xl">ネットワーク</p>
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
                </div>
            </div>
        </>
    );
};

export default ShelfList;