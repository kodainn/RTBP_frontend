import LinkText from "../parts/LinkText"
import { format } from "date-fns";
import defaultBookImage from "../../assets/default_book.png";

type Props = {
    id:        number,
    title:     string,
    imgUrl:   string,
    startOn:  Date,
    targetOn: Date
}


const StudyingBookCard: React.FC<Props> = ({ id, title, imgUrl, startOn, targetOn }) => {
    return (
        <div className="bg-white rounded overflow-hidden shadow-lg flex">
            <img className="w-1/2 h-48" src={imgUrl ? imgUrl : defaultBookImage} alt="bookImage" />
            <div className="px-6 py-4 flex flex-col justify-center">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {startOn && targetOn && format(startOn, "MM月dd日") + "から"}<br />
                    {format(targetOn, "MM月dd日") + "まで"}
                </p>
                <div className="mr-2 ml-2 mt-2">
                    <LinkText
                        link={"/studying-books/" + id + "/record"}
                        name="記録をつける >"
                        size="lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default StudyingBookCard;