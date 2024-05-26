import LinkText from "../parts/LinkText";
import ShelveCreateFormCard from "../templates/ShelveCreateFormCard";



const ShelveCreateView: React.FC = () => {
    return (
        <>
            <div className="mt-6">
                <LinkText
                    link="/shelves"
                    name="< 戻る"
                    size="base"
                />
            </div>
            <div className="max-w-xl mx-auto mt-12">
                <div className="flex justify-center">
                    <div className="w-full mb-24">
                        <ShelveCreateFormCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShelveCreateView;