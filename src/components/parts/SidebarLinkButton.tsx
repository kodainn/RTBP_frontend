import { Link } from "react-router-dom";

type Props = {
    link: string,
    name: string,
    onClick?: () => void
}

const SidebarLinkButton: React.FC<Props> = ({ link, name, onClick = () => {} }) => {
    return (
        <Link to={link} onClick={onClick} className="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700 group">
            <span className="ms-3">{name}</span>
        </Link>
    )
}

export default SidebarLinkButton;