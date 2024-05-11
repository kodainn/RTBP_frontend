import LinkText from "../parts/LinkText"
import defaultBookImage from "../../assets/default_book_image.png";

const StudyingBookCard: React.FC = () => {
    return (
        <div className="bg-white rounded overflow-hidden shadow-lg flex">
            <img className="w-1/2 h-48" src={defaultBookImage} alt="bookImage" />
            <div className="px-6 py-4 flex flex-col justify-center">
                <div className="font-bold text-xl mb-2">PHPの絵本</div>
                <p className="text-gray-700 text-base">
                    5月28日から6月11日
                </p>
                <div className="mr-2 ml-2 mt-2">
                    <LinkText
                        link="/studying-books/1/record"
                        name="記録"
                        size="lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default StudyingBookCard;