type Props = {
    name: string,
    onClick: () => void
    isWeightFull?: boolean
};

const Button: React.FC<Props> = ({ name, onClick, isWeightFull = false }) => {
    return (
        <button type="button" onClick={onClick} className={`${isWeightFull ? "w-full " : ""} bg-transparent text-gray-700 font-semibold py-3 px-5 border border-gray-500 rounded hover:bg-gray-500 hover:text-white hover:border-gray-700`}>
            {name}
        </button>
    )
};

export default Button;