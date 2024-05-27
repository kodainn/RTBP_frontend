import defaultBookImage from "../../assets/default_book.png";

type Props = {
    shelveName: string,
    title:       string,
    remark:      string,
    imgUrl:      string
}

const BookDetailCard: React.FC<Props> = ({ shelveName, title, remark, imgUrl }) => {
    return (
        <div className="bg-white max-w-xl rounded overflow-hidden shadow-lg">
            <div className="flex justify-center">
                <img className="w-[70%]" src={imgUrl ? imgUrl : defaultBookImage} alt="本の画像" />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {remark}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{shelveName}</span>
            </div>
        </div>
    );
};

export default BookDetailCard;