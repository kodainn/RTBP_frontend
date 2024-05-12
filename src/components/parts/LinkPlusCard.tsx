import { Link } from "react-router-dom";
import plusMarkImage from "../../assets/plus_mark.png";

type Props = {
    link: string;
};

const LinkPlusCard: React.FC<Props> = ({ link }) => {
    return (
        <Link to={link}>
            <div className="bg-white rounded overflow-hidden shadow-lg hover:bg-gray-100">
                <div className="h-32 w-32 flex justify-center items-center">
                    <img className="h-24 w-24" src={plusMarkImage} alt="bookImage" />
                </div>
                <div className="h-16 flex justify-center items-center">
                    棚に追加する
                </div>
            </div>
        </Link>
    );
};

export default LinkPlusCard;