import LinkButton from "../parts/LinkButton";
import LinkPlusCard from "../parts/LinkPlusCard";
import LinkText from "../parts/LinkText";
import BookCard from "./BookCard";

type Props = {
    id:   number,
    name: string,
    books: {
        id:      number,
        title:   string,
        img_url: string
    }[]
}


const SheveInBookCard: React.FC<Props> = ({ id, name, books }) => {
    return (
        <>
            <div className="flex justify-between mr-12 mb-4">
                <div className="flex items-center">
                    <p className="text-xl mr-6">{name}</p>
                    <LinkButton
                        link={"/shelves/" + id + "/edit"}
                        name="棚編集"
                    />
                </div>
                <LinkText
                    link={"/shelves/" + id + "/books"}
                    name="すべて表示する >"
                    size="base"
                />
            </div>
            <div className="overflow-x-auto">
                <div className="flex">
                    <div className="flex-shrink-0 max-w-xs mr-12 mb-6">
                        <LinkPlusCard link={"/shelves/" + id + "/books/create"} />
                    </div>
                    {books.map((book) => {
                        return (
                            <div className="flex-shrink-0 max-w-xs mr-12 mb-6">
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

export default SheveInBookCard;