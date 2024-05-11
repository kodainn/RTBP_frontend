import Sidebar from "../components/templates/Sidebar";

const BookStudyingList: React.FC = () => {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">学習中書籍一覧</div>
        </>
    );
};

export default BookStudyingList;