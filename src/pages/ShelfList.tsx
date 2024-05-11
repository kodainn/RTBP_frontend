import SidebarView from "../components/views/SidebarView";
import BookCard from "../components/templates/BookCard";

const ShelfList: React.FC = () => {
    return (
        <>
            <SidebarView />
            <div className="p-4 sm:ml-64">
                <div className="mt-24">
                    <p className="text-xl">データベース</p>
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
                    <p className="text-xl">ネットワーク</p>
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