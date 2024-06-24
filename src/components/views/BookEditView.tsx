import LinkText from "../parts/LinkText";
import BookEditFormCard from "../templates/BookEditFormCard";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useFetchBook } from "../../hooks/useFetchBook";

const BookEditView: React.FC = () => {
    const { id } = useParams();
    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;
    const book = useFetchBook(id, accessToken);

    if(book === null) {
        return <></>;
    }

    return (
        <>
            <div className="mt-6">
                <LinkText
                    link="/shelves"
                    name="< 戻る"
                    size="base"
                />
            </div>
            <div className="max-w-xl mx-auto mt-12">
                <div className="flex justify-center">
                    <div className="w-full mb-24">
                        <BookEditFormCard
                            id={book.id}
                            shelvesName={book.shelve_name}
                            title={book.title}
                            imgUrl={book.img_url}
                            remark={book.remark}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookEditView;