import BookListView from "../components/views/BookListView";
import Sidebar from "../components/templates/Sidebar";

const BookList: React.FC = () => {
    return (
        <>
           <Sidebar />
            <div className="p-4 sm:ml-64">
                <BookListView />
            </div>
        </>
    );
};

export default BookList;