import phpBookImage from "../../assets/php.jpg";
import LinkText from "../parts/LinkText";

const BookCard: React.FC = () => {
    return (
        <div className="bg-white rounded overflow-hidden shadow-lg flex">
            <img className="w-1/2 h-48" src={phpBookImage} alt="bookImage" />
            <div className="px-6 py-4 flex flex-col justify-center">
                <div className="font-bold text-xl mb-2">PHPの絵本</div>
                <div className="mr-2 ml-2 mt-2">
                    <LinkText
                        link="/book/1/edit"
                        name="編集"
                        size="lg"
                    />
                </div>
                <div className="mr-2 ml-2 mt-2">
                    <LinkText
                        link="/book/1/study/create"
                        name="学習登録"
                        size="lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default BookCard;