import SearchForm from "../templates/SearchForm";
import SheveInBookCard from "../templates/SheveInBookCard";

const SheveListView: React.FC = () => {
    return (
        <>
            <div className="mr-12">
                <SearchForm />
            </div>
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