type Props = {
    type?: string,
    placeholder?: string

};

const InputField: React.FC<Props> = ({type = "text", placeholder = ""}) => {
    return (
        <>
            <input className="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-4 px-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type={type} placeholder={placeholder} />
        </>
    )
};

export default InputField;