import LinkText from "../parts/LinkText";
import defaultBookImage from "../../assets/default_book.png";

type Props = {
    bookId:       number,
    title:        string,
    imgUrl:       string,
    studiedCount: number
}

const StudiedBookHistoryCard: React.FC<Props> = ({ bookId, title, imgUrl, studiedCount }) => {
    return (
        <div className="bg-white rounded overflow-hidden shadow-lg flex">
            <img className="w-1/2 h-48" src={imgUrl ? imgUrl : defaultBookImage} alt="bookImage" />
            <div className="px-6 py-4 flex flex-col justify-center">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    学習回数: {studiedCount}回
                </p>
                <div className="mr-2 ml-2 mt-2">
                    <LinkText
                        link={"/studied-history-books/" + bookId + "/show"}
                        name="履歴を見る >"
                        size="lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default StudiedBookHistoryCard;