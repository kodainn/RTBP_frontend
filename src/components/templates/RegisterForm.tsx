import { ChangeEvent, useState } from "react"
import Button from "../parts/Button"
import InputField from "../parts/InputField"
import Label from "../parts/Label"
import LinkText from "../parts/LinkText"
import { isRequired, isWithinInputRange, isEmail, isPassword } from "../../utils/validate";
import ValidateText from "../parts/ValidateText"
import axios, { AxiosError, AxiosResponse } from "axios"
import { useLocation, useNavigate } from "react-router-dom"
import FaildAlertMessage from "../parts/FaildAlertMessage"


const RegisterForm: React.FC = () => {

    const navigate = useNavigate();

    const registerStatus = useLocation().state;

    const [ usernameInput, setUsernameInput ] = useState<string>("");
    const changeUsernameInput = (event: ChangeEvent<HTMLInputElement>): void => {
        setUsernameInput(event.target.value);
    }
    const [ emailInput, setEmailInput ] = useState<string>("");
    const changeEmailInput = (event: ChangeEvent<HTMLInputElement>): void => {
        setEmailInput(event.target.value);
    }
    const [ passwordInput, setPasswordInput ] = useState<string>("");
    const changePasswordInput = (event: ChangeEvent<HTMLInputElement>): void => {
        setPasswordInput(event.target.value);
    }

    const [ usernameValidateMessage, setUsernameValidateMessage ] = useState<string>("");
    const [ emailValidateMessage, setEmailValidateMessage ] = useState<string>("");
    const [ passwordValidateMessage, setPasswordValidateMessage ] = useState<string>("");

    const formValidate = (): boolean => {
        setUsernameValidateMessage("");
        setEmailValidateMessage("");
        setPasswordValidateMessage("");

        let isValidate = false;

        if(!isRequired(usernameInput)) {
            setUsernameValidateMessage("必須入力です。");
            isValidate = true;
        }

        if(!isWithinInputRange(usernameInput, 20)) {
            setUsernameValidateMessage("20文字以内で入力してください。");
            isValidate = true;
        }

        if(!isRequired(emailInput)) {
            setEmailValidateMessage("必須入力です。");
            isValidate = true;
        }

        if(!isEmail(emailInput)) {
            setEmailValidateMessage("メールアドレスの形式が正しくありません。");
            isValidate = true;
        }

        if(!isRequired(passwordInput)) {
            setPasswordValidateMessage("必須項目です。");
            isValidate = true;
        }

        if(!isPassword(passwordInput)) {
            setPasswordValidateMessage("パスワードは半角英数字、記号のみで入力してください。");
            isValidate = true;
        }

        if(!isWithinInputRange(passwordInput, 50)) {
            setPasswordValidateMessage("50文字以内で入力してください。")
            isValidate = true;
        }

        return isValidate;
    }

    const createReqBody = (name: string, email: string, password: string): any => {
        return {
            name:     name,
            email:    email,
            password: password
        }
    }

    const sendForm = (name: string, email: string, password: string): void => {
        const isValidate = formValidate();
        if(isValidate) return;

        const reqBody = createReqBody(name, email, password);

        axios.post(import.meta.env.VITE_API_URL + "/register", reqBody)
        .then((res: AxiosResponse<any>) => {
            if(res.status === 201) {
                navigate("/login", {state: {message: "会員登録が完了しました。", type: "success"}});
            }
        })
        .catch((error: AxiosError<any>) => {
            navigate("/register", {state: {message: "会員登録に失敗しました。", type: "faild"}});
        });
    }


    return (
        <div className="w-full max-w-lg">
            {registerStatus !== null && registerStatus.type === "faild" && <FaildAlertMessage message={registerStatus.message} />}
            <div className="flex flex-wrap -mx-3 mt-6 mb-6">
                <div className="w-full px-3 mt-6 mb-6 md:mb-0">
                    <p className="text-2xl mb-6 text-center">会員登録</p>
                </div>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <Label name="ユーザー名" size="base" />
                    <InputField
                        onChange={changeUsernameInput}
                        value={usernameInput}
                    />
                    <ValidateText message={usernameValidateMessage} />
                </div>
                <div className="w-full px-3 mt-6 mb-6 md:mb-0">
                    <Label name="メールアドレス" size="base" />
                    <InputField
                        onChange={changeEmailInput}
                        value={emailInput}
                    />
                    <ValidateText message={emailValidateMessage} />
                </div>
                <div className="w-full px-3 mt-6 mb-6 md:mb-0">
                    <Label name="パスワード" size="base" />
                    <InputField
                        onChange={changePasswordInput}
                        value={passwordInput}
                        type="password"
                    />
                    <ValidateText message={passwordValidateMessage} />
                </div>
                <div className="w-full px-3 mt-6 mb-6 md:mb-0">
                    <Button
                        onClick={() => sendForm(usernameInput, emailInput, passwordInput)}
                        name="登録"
                        isWeightFull={true}
                    />
                </div>
                <div className="w-full px-3 mt-6 md:mb-0">
                    <div className="text-right">
                        <LinkText
                            link="/login"
                            name="アカウントをお持ちのからはこちら"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;