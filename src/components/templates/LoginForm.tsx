import Button from "../parts/Button";
import InputText from "../parts/InputText"
import LinkText from "../parts/LinkText";

const LoginForm: React.FC = () => {
    return (
        <div className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mt-6 mb-6">
                <div className="w-full px-3 mt-6 mb-6 md:mb-0">
                    <p className="text-2xl text-center">ログイン</p>
                </div>
                <div className="w-full px-3 mt-6 md:mb-0">
                    <div className="text-right">
                        <LinkText
                            link="/register"
                            name="新規会員登録はこちら"
                        />
                    </div>
                </div>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <InputText
                        name="名前"
                        type="text"
                    />
                </div>
                <div className="w-full px-3 mt-6 mb-6 md:mb-0">
                    <InputText
                        name="パスワード"
                        type="password"
                    />
                </div>
                <div className="w-full px-3 mt-6 mb-6 md:mb-0">
                    <Button
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