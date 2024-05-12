type Props = {
    placeholder?: string

};

const InputDate: React.FC<Props> = ({placeholder = ""}) => {
    return (
        <>
            <input className="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-4 px-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date"/>
        </>
    )
};

export default InputDate;