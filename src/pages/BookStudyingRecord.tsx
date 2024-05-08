import { useParams } from "react-router-dom";
import SidebarView from "../components/views/SidebarView";

type Params = {
    id: string;
};

const BookStudyingRecord: React.FC = () => {
    const { id } = useParams<Params>();
    return (
        <>
            <SidebarView />
            <div className="p-4 sm:ml-64">学習中書籍記録{ id }</div>
        </>
    );
};

export default BookStudyingRecord;