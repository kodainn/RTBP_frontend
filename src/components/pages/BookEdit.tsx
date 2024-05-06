import { useParams } from "react-router-dom";

type Param = {
    id: string;
};

const BookEdit: React.FC = () => {
    const  { id }  = useParams<Param>();
    return <div>書籍編集{id}</div>
};

export default BookEdit;