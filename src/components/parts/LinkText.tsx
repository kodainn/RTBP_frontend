import { Link } from "react-router-dom";

type Props = {
    link: string,
    name: string,
    size?: string
};

const LinkText: React.FC<Props> = ({link, name, size = "sm"}) => {
    return (
        <Link className={`text-${size} text-blue-500 hover:text-purple-700 hover:underline`} to={link}>
            {name}
        </Link>
    );
};

export default LinkText;