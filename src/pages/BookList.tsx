import LinkText from "../components/parts/LinkText";
import BookCard from "../components/templates/BookCard";
import SidebarView from "../components/views/SidebarView";

const BookList: React.FC = () => {
    return (
        <>
            <SidebarView />
            <div className="p-4 sm:ml-64">
                <div className="mt-6">
                    <LinkText
                        link="/shelves"
                        name="< 戻る"
                        size="base"
                    />
                </div>
                <div className="mt-24">
                    <p className="text-xl">データベース</p>
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
            </div>
        </>
    );
};

export default BookList;