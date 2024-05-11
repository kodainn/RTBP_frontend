type Props = {
    name: string,
    color?: string,
    isWeightFull?: boolean
};

const Button: React.FC<Props> = ({ name, color = "gray", isWeightFull = false }) => {
    return (
        <button className={`${isWeightFull ? "w-full " : ""} bg-transparent text-${color}-700 font-semibold py-3 px-5 border border-${color}-500 rounded hover:bg-${color}-500 hover:text-white hover:border-${color}-700`}>
            {name}
        </button>
    )
};

export default Button;