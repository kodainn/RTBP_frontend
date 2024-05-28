import { useLocation, useNavigate } from "react-router-dom";
import Button from "../parts/Button";
import InputField from "../parts/InputField"
import Label from "../parts/Label";
import LinkText from "../parts/LinkText";
import SuccessAlertMessage from "../parts/SuccessAlertMessage";
import FaildAlertMessage from "../parts/FaildAlertMessage";
import { ChangeEvent, useState } from "react";
import { isRequired } from "../../utils/validate";
import axios, { AxiosError, AxiosResponse } from "axios";
import ValidateText from "../parts/ValidateText";
import { useCookies } from "react-cookie";

const LoginForm: React.FC = () => {

    const navigate = useNavigate();

    const loginStatus = useLocation().state;

    const [ _, setCookies ] = useCookies();

    const [ usernameInput, setUsernameInput ] = useState<string>("");
    const changeUsernameInput = (event: ChangeEvent<HTMLInputElement>): void => {
        setUsernameInput(event.target.value);
    }
    const [ passwordInput, setPasswordInput ] = useState<string>("");
    const changePasswordInput = (event: ChangeEvent<HTMLInputElement>): void => {
        setPasswordInput(event.target.value);
    }

    const [ usernameValidateMessage, setUsernameValidateMessage ] = useState<string>("");
    const [ passwordValidateMessage, setPasswordValidateMessage ] = useState<string>("");

    const formValidate = (): boolean => {
        setUsernameValidateMessage("");
        setPasswordValidateMessage("");

        let isValidate = false;

        if(!isRequired(usernameInput)) {
            setUsernameValidateMessage("必須入力です。");
            isValidate = true;
        }

        if(!isRequired(passwordInput)) {
            setPasswordValidateMessage("必須項目です。");
            isValidate = true;
        }

        return isValidate;
    }

    const createReqBody = (name: string, password: string): any => {
        return {
            name:     name,
            password: password
        }
    }

    const sendForm = (name: string, password: string): void => {
        const isValidate = formValidate();
        if(isValidate) return;

        const reqBody = createReqBody(name, password);

        axios.post(import.meta.env.VITE_API_URL + "/token", reqBody)
        .then((res: AxiosResponse<any>) => {
            if(res.status === 201) {
                setCookies("access_token", res.data.access_token);
                navigate("/dashboard", {state: {message: "ログインしました。", type: "success"}});
            }
        })
        .catch((error: AxiosError<any>) => {
            navigate("/login", {state: {message: "ログインに失敗しました。", type: "faild"}});
        });
    }

    return (
        <div className="w-full max-w-lg">
            {loginStatus !== null && loginStatus.type === "success" && <SuccessAlertMessage message={loginStatus.message} />}
            {loginStatus !== null && loginStatus.type === "faild" && <FaildAlertMessage message={loginStatus.message} />}
            <div className="flex flex-wrap -mx-3 mt-6 mb-6">
                <div className="w-full px-3 mt-6 mb-6 md:mb-0">
                    <p className="text-2xl text-center">ログイン</p>
                </div>
                <div className="w-full px-3 mt-6 md:mb-0">
                    <div className="text-right">
                        <LinkText
                            link="/register"
                            name="会員登録はこちら"
                        />
                    </div>
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
                        onClick={() => sendForm(usernameInput, passwordInput)}
                        name="ログイン"
                        isWeightFull={true}
                    />
                </div>
                <div className="w-full px-3 mt-6 md:mb-0">
                    <div className="text-right">
                        <LinkText
                            link="/password/reset"
                            name="パスワードを忘れた方はこちら"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginForm;