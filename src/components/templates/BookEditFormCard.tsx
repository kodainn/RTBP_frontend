import Button from "../parts/Button";
import InputField from "../parts/InputField";
import InputTextArea from "../parts/InputTextArea";
import Label from "../parts/Label";
import BookSearchDialog from "../dialog/BookSearchDialog";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { isRequired, isWithinInputRange } from "../../utils/validate";
import ValidateText from "../parts/ValidateText";
import defaultBookImage from "../../assets/default_book.png";
import { useCookies } from "react-cookie";

type Props = {
    id:           number,
    shelvesName:  string,
    title:        string,
    remark:       string,
    imgUrl:       string
}

const BookEditFormCard: React.FC<Props> = ({ id, shelvesName, title, remark, imgUrl }) => {

    const navigate = useNavigate();
    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const [ titleInput, setTitleInput ] = useState<string>(title);
    const [ remarkInput, setRemarkInput ] = useState<string>(remark);
    const [ formImageUrl, setFormImageUrl ] = useState<string>(imgUrl);

    const [ titleValidateMessage, setTitleValidateMessage ] = useState<string>("");
    const [ remarkValidateMessage, setRemarkValidateMessage ] = useState<string>("");

    const formValidate = (): boolean => {
        let isValidate = false;
        if(!isRequired(titleInput)) {
            setTitleValidateMessage("必須入力です。");
            isValidate = true;
        }
        if(!isWithinInputRange(titleInput, 50)) {
            setTitleValidateMessage("50文字以内で入力してください。");
            isValidate = true;
        }
        if(!isWithinInputRange(remarkInput, 200)) {
            setRemarkValidateMessage("200文字以内で入力してください。");
            isValidate = true;
        }

        return isValidate;
    }

    const deleteSendForm = (id: number) => {
        if(!confirm("削除してよろしいでしょうか?")) return ;

        axios.delete(import.meta.env.VITE_API_URL + "/books/" + id, {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<any>) => {
            if(res.status === 204) {
                navigate("/shelves", {state: {message: "書籍の削除が完了しました。", type: "success"}});
            }
        })
        .catch((error: AxiosError<any>) => {
            if(error.response?.status === 401) {
                navigate("/login", {state: {message: "ログインしてください。", type: "faild"}});
            }
            if(error.response?.status === 404 || error.response?.status === 422) {
                navigate("/shelves", {state: {message: "その書籍は既に削除されています。", type: "faild"}});
            }
            if(error.response?.status === 500) {
                navigate("/shelves", {state: {message: "書籍の削除に失敗しました。", type: "faild"}});
            }
        });
    }

    const editSendForm = (id: number): void => {
        const isValidate = formValidate();
        if(isValidate) return;

        const reqBody = {
            title:     titleInput,
            remark:    remarkInput,
            img_url:   formImageUrl
        };

        axios.patch(import.meta.env.VITE_API_URL + "/books/" + id, reqBody, {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<any>) => {
            if(res.status === 200) {
                navigate("/shelves", {state: {message: "書籍の編集に成功しました。", type: "success"}});
            }
        })
        .catch((error: AxiosError<any>) => {
            if(error.response?.status === 401) {
                navigate("/login", {state: {message: "ログインしてください。", type: "faild"}});
            }
            if(error.response?.status === 404 || error.response?.status === 422) {
                navigate("/shelves", {state: {message: "その本棚に書籍は編集できません。", type: "faild"}});
            }
            if(error.response?.status === 409) {
                navigate("/shelves", {state: {message: "その書籍名は既に別の書籍で利用されています。", type: "faild"}});
            }
            if(error.response?.status === 500) {
                navigate("/shelves", {state: {message: "書籍の編集に失敗しました。", type: "faild"}});
            }
        });
    };
    
    const changeTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setTitleInput(event.target.value);
    }
    const changeRemarkInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setRemarkInput(event.target.value);
    }

    const selectSerchBook = (title: string, imgUrl: string): void => {
        setTitleInput(title);
        setFormImageUrl(imgUrl);
    }

    return (
        <div className="bg-white max-w-xl rounded overflow-hidden shadow-lg">
            <div className="px-6 pb-2 mt-8">
                <BookSearchDialog
                    onClick={selectSerchBook}
                />
            </div>
            <div className="px-6 pb-2">
                <Label name="タイトル" size="base" />
                <InputField
                    onChange={changeTitleInput}
                    value={titleInput}
                />
                <ValidateText message={titleValidateMessage} />
            </div>
            <div className="px-6 pb-2">
                <Label name="棚名" size="base" />
                <p className="text-2xl">{shelvesName}</p>
            </div>
            <div className="px-6 pb-2">
                <Label name="備考" size="base" />
                <InputTextArea
                    onChange={changeRemarkInput}
                    value={remarkInput}
                />
                <ValidateText message={remarkValidateMessage} />
            </div>
            <div className="px-6 pb-2">
                <Label name="画像" size="base" />
                <div className="flex justify-center mt-6">
                    <img className="w-[50%]" src={formImageUrl ? formImageUrl : defaultBookImage} alt="本の画像" />
                </div>
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

export default BookEditFormCard;