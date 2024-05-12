import Sidebar from "../components/templates/Sidebar";
import BookCreateView from "../components/views/BookCreateView";

const BookCreate: React.FC = () => {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <BookCreateView />
            </div>
        </>
    );
};

export default BookCreate;