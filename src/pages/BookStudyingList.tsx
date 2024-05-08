import SidebarView from "../components/views/SidebarView";

const BookStudyingList: React.FC = () => {
    return (
        <>
            <SidebarView />
            <div className="p-4 sm:ml-64">学習中書籍一覧</div>
        </>
    );
};

export default BookStudyingList;