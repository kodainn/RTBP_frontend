import Button from "../parts/Button";
import CheckBox from "../parts/CheckBox";
import InputField from "../parts/InputField";
import Label from "../parts/Label";
import InputTextArea from "../parts/InputTextArea";
import { format } from "date-fns";
import { ChangeEvent, useEffect, useState } from "react";
import { isRequired, isWithinInputRange, isTimeFormat } from "../../utils/validate";
import ValidateText from "../parts/ValidateText";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


type Props = {
    id:       number,
    startOn:  string,
    targetOn: string,
    memo:     string,
    targetItems: {
        id: number,
        description: string,
        is_completed: boolean
    }[]
}


const StudyingBookRecordForm: React.FC<Props> = ({ id, startOn, targetOn, memo, targetItems }) => {

    const navigate = useNavigate();
    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const initTargetItems = [...targetItems];

    const [targetItemsCheck, setTargetItemsCheck] = useState<Props["targetItems"]>([...targetItems]);


    const changeTargetItemsCheck = (index: number, event: ChangeEvent<HTMLInputElement>): void => {
        const newTargetItemsCheck = [...targetItemsCheck];
        newTargetItemsCheck[index]["is_completed"] = event.target.checked;
        setTargetItemsCheck(newTargetItemsCheck);

    }

    const [studyTimeInput, setStudyTimeInput] = useState<string>("");
    const changeStudyTimeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setStudyTimeInput(event.target.value);
    }

    const [memoInput, setMemoInput] = useState<string>(memo ?? "");
    const changeMemoInput = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        setMemoInput(event.target.value);
    }

    const [ isCompleted, setIsCompleted ] = useState<boolean>(false);
    useEffect(() => {
        let completedCount = 0;
        for(const target of targetItemsCheck) {
            if(target.is_completed) completedCount++;
        }
        if(completedCount === targetItemsCheck.length) setIsCompleted(true);
        else setIsCompleted(false);

    },[targetItemsCheck]);

    const [ memoInputValidateMessage, setMemoInputValidateMessage ] = useState<string>("");
    const [ studyTimeInputValidateMessage, setStudyTimeInputValidateMessage ] = useState<string>("");

    const formValidate = (): boolean => {
        let isValidate = false;
        if(!isWithinInputRange(memoInput, 200)) {
            setMemoInputValidateMessage("200文字以内で入力してください。");
            isValidate = true;
        }

        if(!isTimeFormat(studyTimeInput)) {
            setStudyTimeInputValidateMessage("形式が不正です。");
            isValidate = true;
        }

        if(!isRequired(studyTimeInput)) {
            setStudyTimeInputValidateMessage("必須入力です。");
            isValidate = true;
        }

        return isValidate;
    }

    const timeFormatToMinutes = (value: string): number => {
        const splitTime = value.split(":");
        const hours = parseInt(splitTime[0]);
        const minutes = parseInt(splitTime[1]);

        return (hours * 60) + minutes;
    }

    const createReqBody = (targetItems: any[], memo: string, studyTime: string): any => {
        const minutes = timeFormatToMinutes(studyTime);

        const targetCompletedItems = targetItems.map((targetItem) => {
            return {
                id:           targetItem.id,
                is_completed: targetItem.is_completed
            };
        });

        const reqBody = {
            target_complate_items: targetCompletedItems,
            memo:                  memo,
            study_minutes:         minutes
        };

        return reqBody;
    }

    const deleteSendForm = (id: number) => {
        if(!confirm("削除してよろしいでしょうか?")) return ;

        axios.delete(process.env.VITE_API_URL + "/studying-books/" + id, {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<any>) => {
            if(res.status === 204) {
                navigate("/studying-books", {state: {message: "学習書籍の削除が完了しました。", type: "success"}});
            }
        })
        .catch((error: AxiosError<any>) => {
            if(error.response?.status === 401) {
                navigate("/login", {state: {message: "ログインしてください。", type: "faild"}});
            }
            if(error.response?.status === 404 || error.response?.status === 422) {
                navigate("/studying-books", {state: {message: "その学習書籍は既に削除されています。", type: "faild"}});
            }
            if(error.response?.status === 500) {
                navigate("/studying-books", {state: {message: "学習書籍の削除に失敗しました。", type: "faild"}});
            }
        });
    }

    const editSendForm = (id: number) => {
        const isValidate = formValidate();
        if(isValidate) return;

        const reqBody = createReqBody(targetItemsCheck, memoInput, studyTimeInput);

        axios.post(process.env.VITE_API_URL + "/studying-books/" + id + "/record", reqBody, {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<any>) => {
            if(res.status === 201) {
                navigate("/studying-books", {state: {message: "記録しました。", type: "success"}});
            }
        })
        .catch((error: AxiosError<any>) => {
            if(error.response?.status === 401) {
                navigate("/login", {state: {message: "ログインしてください。", type: "faild"}});
            }
            if(error.response?.status === 404) {
                navigate("/studying-books", {state: {message: "記録するための学習書籍が見つかりませんでした。", type: "faild"}});
            }
            if(error.response?.status === 422) {
                navigate("/studying-books", {state: {message: "記録に失敗しました。", type: "faild"}});
            }
            if(error.response?.status === 500) {
                navigate("/studying-books", {state: {message: "記録に失敗しました。", type: "faild"}});
            }
        })
    }

    return (
        <div className="bg-white max-w-xl rounded overflow-hidden shadow-lg">
            <dl className="max-w-md divide-y divide-gray-500 ml-6 mt-6 mb-6">
                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-700 md:text-lg">学習期限</dt>
                    <dd className="text-lg font-semibold">{startOn && targetOn && format(startOn, "yyyy年MM月dd日") + "から" + format(targetOn, "yyyy年MM月dd日") + "まで"}</dd>
                </div>
                <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500 md:text-lg">目標設定</dt>
                    <dd className="text-lg font-semibold">
                        {targetItemsCheck.map((targetItem, index: number) => {
                            return (
                                <div key={index} className="flex items-center mb-2">
                                    <div className="mr-3">
                                        <CheckBox
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => changeTargetItemsCheck(index, event)}
                                            isCheck={targetItem.is_completed}
                                            disabled={initTargetItems[index]["is_completed"]}
                                        />
                                    </div>
                                    <div>
                                        <Label name={targetItem.description} size="base" />
                                    </div>
                                </div>
                            );
                        })}
                    </dd>
                </div>
                <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-gray-500 md:text-lg">勉強時間</dt>
                    <dd className="text-lg font-semibold">
                        <InputField
                            onChange={changeStudyTimeInput}
                            value={studyTimeInput}
                            type="time"
                        />
                        <ValidateText message={studyTimeInputValidateMessage} />
                    </dd>
                </div>
                <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-gray-500 md:text-lg">メモ</dt>
                    <dd className="text-lg font-semibold">
                        <InputTextArea
                            onChange={changeMemoInput}
                            value={memoInput}
                        />
                        <ValidateText message={memoInputValidateMessage} />
                    </dd>
                </div>
                <div className="px-6 pb-2 pt-6 mb-8">
                <div className="flex gap-4">
                    <Button onClick={() => deleteSendForm(id)} isWeightFull={true} name="削除" />
                    <Button onClick={() => editSendForm(id)} isWeightFull={true} name={isCompleted ? "学習完了" : "記録" }
                    />
                </div>
                </div>
            </dl>
        </div>
    );
};

export default StudyingBookRecordForm;