import { useParams } from "react-router-dom";
import Sidebar from "../components/templates/Sidebar";
import BookEditView from "../components/views/BookEditView";

type Params = {
    id: string;
};

const BookEdit: React.FC = () => {
    const  { id }  = useParams<Params>();
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