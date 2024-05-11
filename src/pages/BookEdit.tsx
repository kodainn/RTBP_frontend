import { useParams } from "react-router-dom";
import Sidebar from "../components/templates/Sidebar";


type Params = {
    id: string;
};

const BookEdit: React.FC = () => {
    const  { id }  = useParams<Params>();
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">書籍編集{id}</div>
        </>
    );
};

export default BookEdit;