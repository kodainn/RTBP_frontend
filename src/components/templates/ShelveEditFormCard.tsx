import { ChangeEvent, useState } from "react";
import Button from "../parts/Button";
import InputField from "../parts/InputField";
import Label from "../parts/Label";
import { useNavigate } from "react-router-dom";
import { isRequired, isWithinInputRange } from "../../utils/validate";
import axios, { AxiosError, AxiosResponse } from "axios";
import ValidateText from "../parts/ValidateText";
import { useCookies } from "react-cookie";

type Props = {
    id:   number | string,
    name: string
};

const ShelveEditFormCard: React.FC<Props> = ({ id, name }) => {

    const navigate = useNavigate();
    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

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

    const deleteSendForm = (id: string | number) => {
        if(!confirm("削除してよろしいでしょうか?")) return ;

        axios.delete(process.env.VITE_API_URL + "/shelves/" + id, {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<any>) => {
            if(res.status === 204) {
                navigate("/shelves", {state: {message: "本棚の削除が完了しました。", type: "success"}});
            }
        })
        .catch((error: AxiosError<any>) => {
            if(error.response?.status === 401) {
                navigate("/login", {state: {message: "ログインしてください。", type: "faild"}});
            }
            if(error.response?.status === 404 || error.response?.status === 422) {
                navigate("/shelves", {state: {message: "その本棚は既に削除されています。", type: "faild"}});
            }
            if(error.response?.status === 500) {
                navigate("/shelves", {state: {message: "本棚の削除に失敗しました。", type: "faild"}});
            }
        });
    }

    const editSendForm = (id: string | number) => {
        const isValidate = formValidate();
        if(isValidate) return;

        const reqBody = {
            name: nameInput
        };

        axios.patch(process.env.VITE_API_URL + "/shelves/" + id, reqBody, {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<any>) => {
            if(res.status === 200) {
                navigate("/shelves", {state: {message: "本棚を編集しました。", type: "success"}});
            }
        })
        .catch((error: AxiosError<any>) => {
            if(error.response?.status === 401) {
                navigate("/login", {state: {message: "ログインしてください。", type: "faild"}});
            }
            if(error.response?.status === 404 || error.response?.status === 422) {
                navigate("/shelves", {state: {message: "所有していない本棚は編集できません。", type: "faild"}});
            }
            if(error.response?.status === 409) {
                navigate("/shelves", {state: {message: "その本棚名は別の本棚で使われています。", type: "faild"}});
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
                <div className="flex gap-4">
                    <Button onClick={() => deleteSendForm(id)} isWeightFull={true} name="削除" />
                    <Button onClick={() => editSendForm(id)} isWeightFull={true} name="編集" />
                </div>
            </div>
        </div>
    );
};

export default ShelveEditFormCard;