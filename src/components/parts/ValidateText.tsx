
type Props = {
    message: string
};

const ValidateText: React.FC<Props> = ({ message }) => {
    return (
        <div className="text-base text-red-500">{message}</div>
    );
};

export default ValidateText;