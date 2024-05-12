import Sidebar from "../components/templates/Sidebar";
import BookEditView from "../components/views/BookEditView";

const BookEdit: React.FC = () => {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <BookEditView />
            </div>
        </>
    );
};

export default BookEdit;