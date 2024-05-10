type Props = {
    name: string,
    color?: string,
    isWeightFull?: boolean
};

const Button: React.FC<Props> = ({name, color="gray", isWeightFull = false}) => {
    return (
        <button className={(isWeightFull ? "w-full" : "") + " bg-transparent hover:bg-" + color + "-500 text-" + color + "-700 font-semibold hover:text-white py-3 px-5 border border-" + color + "-500 hover:border-transparent rounded"}>
            {name}
        </button>
    )
};

export default Button;