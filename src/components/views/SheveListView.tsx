import SheveInBookCard from "../templates/SheveInBookCard";

const SheveListView: React.FC = () => {
    return (
        <>
            <div className="mt-16 mb-16">
                <SheveInBookCard />
            </div>
            <div className="mt-16 mb-16">
                <SheveInBookCard />
            </div>
        </>
    );
};

export default SheveListView;