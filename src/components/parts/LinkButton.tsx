import { Link } from "react-router-dom";

type Props = {
    link: string,
    name: string,
};

const LinkButton: React.FC<Props> = ({ link, name }) => {
    return (
        <Link to={link} className="bg-transparent text-gray-700 font-semibold py-3 px-5 border border-gray-500 rounded hover:bg-gray-500 hover:text-white hover:border-gray-700">
            {name}
        </Link>
    )
};

export default LinkButton;