import SidebarLinkButton from "../parts/SidebarLinkButton";
import { useCookies } from "react-cookie";

const Sidebar: React.FC = () => {
    const [ , , removeCookie ] = useCookies();

    const logOut = () => {
        removeCookie("access_token");
    }
    return (
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <SidebarLinkButton link="/dashboard" name="ダッシュボード" />
                    <SidebarLinkButton link="/shelves" name="棚一覧" />
                    <SidebarLinkButton link="/studying-books" name="学習中書籍一覧" />
                    <SidebarLinkButton link="/studied-history-books" name="学習書籍履歴一覧" />
                    <SidebarLinkButton link="/login" onClick={logOut} name="ログアウト" />
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;