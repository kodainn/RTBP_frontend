
type Props = {
    name: string,
    size?: string
    color?: string
};

const Label: React.FC<Props> = ({ name, size = "sm", color = "gray"}) => {
    return (
        <label className={`block uppercase tracking-wide text-${color}-700 text-${size} font-bold mb-2" htmlFor="grid-password`}>
            {name}
        </label>
    );
};

export default Label;