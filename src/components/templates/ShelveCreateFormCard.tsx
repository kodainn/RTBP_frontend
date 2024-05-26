import { ChangeEvent, useState } from "react";
import Button from "../parts/Button";
import InputField from "../parts/InputField";
import Label from "../parts/Label";
import ValidateText from "../parts/ValidateText";
import { isRequired, isWithinInputRange } from "../../utils/validate";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";


const ShelveCreateFormCard: React.FC = () => {
    const navigate = useNavigate();
    const [ nameInput, setNameInput ] = useState<string>("");
    const [ nameValidateMessage, setNameValidateMessage ] = useState<string>("");

    const changeNameInput = (event: ChangeEvent<HTMLInputElement>) => {
        setNameInput(event.target.value);
    };

    const formValidate = (): boolean => {
        setNameValidateMessage("");
        let isValidate = false;
        if(!isRequired(nameInput)) {
            setNameValidateMessage("必須入力です。");
            isValidate = true;
        }

        if(!isWithinInputRange(nameInput, 50)) {
            setNameValidateMessage("50文字以内で入力してください。");
            isValidate = true;
        }

        return isValidate;
    }

    const sendForm = () => {
        const isValidate = formValidate();
        if(isValidate) return;

        const reqBody = {
            name: nameInput
        };

        axios.post(import.meta.env.VITE_API_URL + "/shelves", reqBody)
        .then((res: AxiosResponse) => {
            if(res.status === 201) {
                navigate("/shelves", {state: {message: "本棚の追加に成功しました。", type: "success"}});
            }
        })
        .catch((error: any) => {
            if(error.response?.status === 409) {
                navigate("/shelves", {state: {message: "その本棚は既に追加されています。", type: "faild"}});
            }
            if(error.response?.status === 500) {
                navigate("/shelves", {state: {message: "本棚の追加に失敗しました。", type: "faild"}});
            }
        });
    };

    return (
        <div className="bg-white max-w-xl rounded overflow-hidden shadow-lg">
            <div className="px-6 pb-2 mt-8">
                <Label name="棚名" size="base" />
                <InputField
                    onChange={changeNameInput}
                />
                <ValidateText message={nameValidateMessage} />
            </div>
            <div className="px-6 pb-2 pt-6 mb-8">
                <Button isWeightFull={true} onClick={sendForm} name="作成" />
            </div>
        </div>
    );
};

export default ShelveCreateFormCard;