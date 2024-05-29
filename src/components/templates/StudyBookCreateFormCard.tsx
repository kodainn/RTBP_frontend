import { ChangeEvent, useState } from "react";
import Button from "../parts/Button";
import InputField from "../parts/InputField";
import Label from "../parts/Label";
import ValidateText from "../parts/ValidateText";
import { isRequired, isWithinInputRange, isDate } from "../../utils/validate";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

type Props = {
    book_id: number
};

const StudyBookCreateFormCard: React.FC<Props> = ({ book_id }) => {

    const navigate = useNavigate();
    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const [ targetItems, setTargetItems ] = useState<string[]>([""]);
    const changeTargetItems = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const newTargetItems = [...targetItems];
        newTargetItems[index] = event.target.value;
        setTargetItems(newTargetItems);
    }

    const addTargetItems = () => {
        const newTargetItems = [...targetItems];
        newTargetItems.push("");
        setTargetItems(newTargetItems);
    }

    const subTargetItems = () => {
        const newTargetItems = [...targetItems];
        if(newTargetItems.length > 1) {
            newTargetItems.pop();
        }
        setTargetItems(newTargetItems);
    }

    const [ targetOnInput, setTargetOnInput ] = useState<string>("");
    const changeTargetOn = (event: ChangeEvent<HTMLDataElement>) => {
        setTargetOnInput(event.target.value);
    }


    const [ targetItemsValidateMessage, setTargetItemsValidateMessage ] = useState<string[]>([""]);

    const addTargetItemsValidateMessage = () => {
        const newTargetItemsValidateMessage = [...targetItemsValidateMessage];
        newTargetItemsValidateMessage.push("");
        setTargetItemsValidateMessage(newTargetItemsValidateMessage);
    }

    const subTargetItemsValidateMessage = () => {
        const newTargetItemsValidateMessage = [...targetItemsValidateMessage];
        newTargetItemsValidateMessage.pop();
        setTargetItemsValidateMessage(newTargetItemsValidateMessage);
    }

    const [ targetOnValidateMessage, setTargetOnValidateMessage ] = useState<string>("");


    const formValidate = () => {
        let isValidate = false;
        setTargetOnValidateMessage("");
        const newTargetItemsValidateMessage = targetItems.map((targetItem: string): string => {
            if(!isWithinInputRange(targetItem, 150)) {
                isValidate = true;
                return "150文字以内で入力してください。";
            }
            if(!isRequired(targetItem)) {
                isValidate = true;
                return "必須入力です。";
            }
            return "";
        });
        setTargetItemsValidateMessage(newTargetItemsValidateMessage);

        if(!isDate(targetOnInput)) {
            setTargetOnValidateMessage("年月日の形式が間違っています。");
            isValidate = true;
        }

        if(!isRequired(targetOnInput)) {
            setTargetOnValidateMessage("必須項目です。");
            isValidate = true;
        }

        return isValidate;
    }

    const createReqBody = (book_id: number, targetItems: string[], targetOn: string): any => {
        const reqTargetItems = targetItems.map((targetItem) => {
            return {
                description: targetItem
            }
        });

        const createReqBody = {
            book_id:      book_id,
            target_items: reqTargetItems,
            target_on:    targetOn
        }

        return createReqBody;
    }

    const sendForm = (): void => {
        const isValidate = formValidate();
        if(isValidate) return;

        const reqBody = createReqBody(book_id, targetItems, targetOnInput);

        axios.post(process.env.VITE_API_URL + "/studying-books", reqBody, {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<any>) => {
            if(res.status === 201) {
                navigate("/shelves", {state: {message: "学習書籍の追加に成功しました。", type: "success"}});
            }
        })
        .catch((error: AxiosError<any>) => {
            if(error.response?.status === 401) {
                navigate("/login", {state: {message: "ログインしてください。", type: "faild"}});
            }
            if(error.response?.status === 404 || error.response?.status === 422) {
                navigate("/shelves", {state: {message: "その書籍の学習書籍は追加できません。", type: "faild"}});
            }
            if(error.response?.status === 500) {
                navigate("/shelves", {state: {message: "本棚の追加に失敗しました。", type: "faild"}});
            }
        })
    }

    return (
        <div className="bg-white max-w-xl rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">目標設定</div>
            </div>
            <div className="px-6 pb-2">
                {targetItems.map((targetItem: string, index: number) => {
                    return (
                        <div key={index} className="mb-2">
                            <InputField
                                onChange={(event: ChangeEvent<HTMLInputElement>) => changeTargetItems(index, event)}
                                value={targetItem}
                                placeholder="学習での目標を設定する"
                            />
                            <ValidateText
                                message={targetItemsValidateMessage[index]}
                            />
                        </div>
                    );
                })}
                <div className="flex gap-4">
                    <Button
                        name="+"
                        onClick={() => {
                            addTargetItems();
                            addTargetItemsValidateMessage();
                        }}
                    />
                    <Button
                        name="-"
                        onClick={() => {
                            subTargetItems();
                            subTargetItemsValidateMessage();
                        }}
                    />
                </div>
            </div>
            <div className="px-6 pb-2 pt-6">
                <Label name="目標達成日" size="base" />
                <InputField
                    onChange={changeTargetOn}
                    value={targetOnInput}
                    type="date"
                />
                <ValidateText message={targetOnValidateMessage} />
            </div>
            <div className="px-6 pb-2 pt-6 mb-8">
                <Button
                    onClick={sendForm}
                    isWeightFull={true}
                    name="登録"
                />
            </div>
        </div>
    );
};

export default StudyBookCreateFormCard;