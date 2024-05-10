import { Link } from "react-router-dom";

type Props = {
    link: string,
    name: string
};

const LinkText: React.FC<Props> = ({link, name}) => {
    return (
        <Link className="text-sm text-blue-500 hover:text-purple-700 hover:underline" to={link}>
            {name}
        </Link>
    );
};

export default LinkText;