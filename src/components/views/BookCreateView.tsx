import LinkText from "../parts/LinkText";
import BookCreateFormCard from "../templates/BookCreateFormCard";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useFetchShelve } from "../../hooks/useFetchShelve";

const BookCreateView: React.FC = () => {
    const { id } = useParams();
    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const shelve = useFetchShelve(id, accessToken);

    if(shelve === null) {
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
                        <BookCreateFormCard
                            id={shelve.id}
                            name={shelve.name}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookCreateView;