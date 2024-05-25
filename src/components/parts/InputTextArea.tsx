type Props = {
    placeholder?: string
};

const InputTextArea: React.FC<Props> = ({placeholder = ""}) => {
    return (
        <textarea className="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-4 px-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48" placeholder={placeholder}></textarea>
    )
};

export default InputTextArea;