
type Props = {
    name: string,
    type: "text" | "password",
    placeholder?: string

};

const InputText: React.FC<Props> = ({name, type, placeholder = ""}) => {
    return (
        <>
            <label className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" htmlFor="grid-password">
                {name}
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type={type} placeholder={placeholder} />
        </>
    )
};

export default InputText;