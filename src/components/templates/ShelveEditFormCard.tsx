import { ChangeEvent, useState } from "react";
import Button from "../parts/Button";
import InputField from "../parts/InputField";
import Label from "../parts/Label";
import { useNavigate } from "react-router-dom";
import { isRequired, isWithinInputRange } from "../../utils/validate";
import axios, { AxiosResponse } from "axios";
import ValidateText from "../parts/ValidateText";

type Props = {
    id:   number | string,
    name: string
};

const ShelveEditFormCard: React.FC<Props> = ({ id, name }) => {

    const navigate = useNavigate();
    const [ nameInput, setNameInput ] = useState<string>(name);
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

    const sendForm = (id: string | number) => {
        const isValidate = formValidate();
        if(isValidate) return;

        const reqBody = {
            name: nameInput
        };

        axios.patch(import.meta.env.VITE_API_URL + "/shelves/" + id, reqBody)
        .then((res: AxiosResponse) => {
            if(res.status === 200) {
                navigate("/shelves", {state: {message: "本棚の編集に成功しました。", type: "success"}});
            }
        })
        .catch((error: any) => {
            console.log(error.response);
            if(error.response?.status === 404) {
                navigate("/shelves", {state: {message: "所有していない本棚は編集できません。", type: "faild"}});
            }
            if(error.response?.status === 409) {
                navigate("/shelves", {state: {message: "その本棚名は別の本棚で使われています。", type: "faild"}});
            }
            if(error.response?.status === 422) {
                navigate("/shelves", {state: {message: "本棚の編集に失敗しました。", type: "faild"}});
            }
            if(error.response?.status === 500) {
                navigate("/shelves", {state: {message: "本棚の編集に失敗しました。", type: "faild"}});
            }
        });
    };


    return (
        <div className="bg-white max-w-xl rounded overflow-hidden shadow-lg">
            <div className="px-6 pb-2 mt-8">
                <Label name="棚名" size="base" />
                <InputField onChange={changeNameInput} value={nameInput} />
                <ValidateText message={nameValidateMessage} />
            </div>
            <div className="px-6 pb-2 pt-6 mb-8">
                <Button onClick={() => sendForm(id)} isWeightFull={true} name="編集" />
            </div>
        </div>
    );
};

export default ShelveEditFormCard;