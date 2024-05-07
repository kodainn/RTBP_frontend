import SidebarView from "../components/views/SidebarView";

const BookList: React.FC = () => {
    return (
        <>
            <SidebarView />
            <div className="p-4 sm:ml-64">書籍一覧</div>
        </>
    );
};

export default BookList;