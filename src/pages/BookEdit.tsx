import { useParams } from "react-router-dom";
import SidebarView from "../components/views/SidebarView";

type Params = {
    id: string;
};

const BookEdit: React.FC = () => {
    const  { id }  = useParams<Params>();
    return (
        <>
            <SidebarView />
            <div className="p-4 sm:ml-64">書籍編集{id}</div>
        </>
    );
};

export default BookEdit;