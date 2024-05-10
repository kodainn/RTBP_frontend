import Button from "../parts/Button"
import InputText from "../parts/InputText"
import LinkText from "../parts/LinkText"

const RegisterForm: React.FC = () => {
    return (
        <div className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mt-6 mb-6">
                <div className="w-full px-3 mt-6 mb-6 md:mb-0">
                    <p className="text-2xl text-center">会員登録</p>
                </div>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <InputText
                        name="ユーザー名"
                        type="text"
                    />
                </div>
                <div className="w-full px-3 mt-6 mb-6 md:mb-0">
                    <InputText
                        name="メールアドレス"
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