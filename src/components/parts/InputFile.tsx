
const InputFile: React.FC = () => {
    return (
        <div className="max-w-xs">
            <input type="file" className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-gray-500 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60" />
        </div>
    );
};

export default InputFile;