import phpBookImage from "../../assets/php.jpg";

const BookDetailCard: React.FC = () => {
    return (
        <div className="max-w-xl rounded overflow-hidden shadow-lg">
            <div className="flex justify-center">
                <img className="w-[70%]" src={phpBookImage} alt="本の画像" />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">PHPの絵本</div>
                <p className="text-gray-700 text-base">
                    書学者向けPHPの入門書
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">webアプリ開発</span>
            </div>
        </div>
    );
};

export default BookDetailCard;