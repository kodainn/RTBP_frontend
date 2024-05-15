import phpBookImage from "../../assets/php.jpg";
import LinkText from "../parts/LinkText";

const BookCard: React.FC = () => {
    return (
        <div className="bg-white rounded overflow-hidden shadow-lg flex">
            <img className="w-[40%] h-48" src={phpBookImage} alt="bookImage" />
            <div className="px-6 py-4 flex flex-col justify-center">
                <div className="font-bold text-xl mb-2">PHPの絵本</div>
                <div className="ml-2 mt-2">
                    <LinkText
                        link="/books/1/edit"
                        name="編集する >"
                        size="lg"
                    />
                </div>
                <div className="ml-2 mt-2">
                    <LinkText
                        link="/books/1/studies/create"
                        name="学習登録する >"
                        size="lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default BookCard;