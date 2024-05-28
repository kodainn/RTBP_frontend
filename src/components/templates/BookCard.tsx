import LinkText from "../parts/LinkText";
import defaultBookImage from "../../assets/default_book.png";

type Props = {
    id:      number,
    title:   string,
    imgUrl: string
}

const BookCard: React.FC<Props> = ({ id, title, imgUrl }) => {

    return (
        <div className="bg-white rounded overflow-hidden shadow-lg flex">
            <img className="w-[40%] h-48" src={imgUrl ? imgUrl : defaultBookImage} alt="bookImage" />
            <div className="px-6 py-4 flex flex-col justify-center">
                <div className="font-bold text-xl mb-2">{title}</div>
                <div className="ml-2 mt-2">
                    <LinkText
                        link={"/shelves/books/" + id + "/edit"}
                        name="編集する >"
                        size="lg"
                    />
                </div>
                <div className="ml-2 mt-2">
                    <LinkText
                        link={"/books/" + id + "/studies/create"}
                        name="学習登録する >"
                        size="lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default BookCard;