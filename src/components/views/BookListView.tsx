import { useParams } from "react-router-dom";
import LinkText from "../parts/LinkText";
import BookCard from "../templates/BookCard";
import { useCookies } from "react-cookie";
import { useFetchSlevesIdBooks } from "../../hooks/useFetchSlevesIdBooks";





const BookListView: React.FC = () => {
    const { id } = useParams();
    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const shelvesIdBooks = useFetchSlevesIdBooks(id, accessToken);

    if(shelvesIdBooks === null) {
        return <div>loading...</div>;
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
            <div className="mt-24">
                <p className="text-xl ml-12">{shelvesIdBooks.name}</p>
                <div className="flex flex-wrap">
                    {shelvesIdBooks["books"].map((book) => {
                        return (
                            <div key={book.id} className="w-full sm:w-1/2 xl:w-1/3 p-4">
                                <BookCard
                                    id={book.id}
                                    title={book.title}
                                    imgUrl={book.img_url}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default BookListView;