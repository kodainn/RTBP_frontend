import Sidebar from "../templates/Sidebar";

type sidebar = {
    link: string,
    name: string
}

const SidebarView: React.FC = () => {
    const sidebars: sidebar[] = [
        {link: "/dashboard", name: "ダッシュボード"},
        {link: "/shelves", name: "棚一覧"},
        {link: "/studying-books", name: "学習中書籍一覧"},
        {link: "/studied-history-books", name: "学習書籍履歴一覧"},
    ];

    return (
        <Sidebar sidebars={sidebars} />
    )
}

export default SidebarView;