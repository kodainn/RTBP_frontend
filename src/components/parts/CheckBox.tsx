import { ChangeEvent } from "react";

type Props = {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
    isCheck?: boolean,
    disabled?: boolean
};

const CheckBox: React.FC<Props> = ({onChange = () => {}, isCheck = false, disabled = false}) => {
    return (
        <input id="default-checkbox" onChange={onChange} checked={isCheck} disabled={disabled} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    );
};

export default CheckBox;