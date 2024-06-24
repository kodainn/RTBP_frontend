import LinkText from "../parts/LinkText";
import BookDetailCard from "../templates/BookDetailCard";
import StudyBookCreateFormCard from "../templates/StudyBookCreateFormCard";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useFetchBook } from "../../hooks/useFetchBook";


const StudyBookCreateView: React.FC = () => {
    const { id } = useParams();
    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const book = useFetchBook(id, accessToken);
    console.log(book);

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
            <div className="max-w-xl mx-auto">
                <div className="flex justify-center mt-12 mb-12">
                    <div className="w-full">
                        <BookDetailCard
                            shelveName={book.shelve_name}
                            title={book.title}
                            remark={book.remark}
                            imgUrl={book.img_url}
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-full mb-24">
                        <StudyBookCreateFormCard book_id={book.id}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudyBookCreateView;