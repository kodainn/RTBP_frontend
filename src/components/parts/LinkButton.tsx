import { Link } from "react-router-dom";

type Props = {
    link: string,
    name: string
}

const LinkButton: React.FC<Props> = ({ link, name}) => {
    return (
        <Link to={link} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span className="ms-3">{name}</span>
        </Link>
    )
}

export default LinkButton;