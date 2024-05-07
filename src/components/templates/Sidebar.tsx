import LinkButton from "../parts/LinkButton";

type sidebar = {
    link: string,
    name: string
}

type Props = {
    sidebars?: sidebar[]
}

const Sidebar: React.FC<Props> = ({sidebars}) => {
    return (
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {sidebars?.map((sidebar: sidebar, index: number) => (
                        <li key={index}>
                            <LinkButton
                                link={sidebar.link}
                                name={sidebar.name}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;