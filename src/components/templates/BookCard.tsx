import defaultBookImage from "../../assets/default_book_image.png";
import LinkText from "../parts/LinkText";

const BookCard: React.FC = () => {
    return (
        <div className="bg-white rounded overflow-hidden shadow-lg flex">
            <img className="w-1/2 h-48" src={defaultBookImage} alt="bookImage" />
            <div className="px-6 py-4 flex flex-col justify-center">
                <div className="font-bold text-xl mb-2">PHPの絵本</div>
                <div className="flex">
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
                            name="学習"
                            size="lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;