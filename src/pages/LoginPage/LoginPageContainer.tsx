import { FC } from "react";
import useLoginPage from "./hooks";
import LoginPage from "./LoginPage";

const LoginPageContainer:FC = () => {
    const loganPageProps = useLoginPage();
    return <LoginPage {...loganPageProps}/>
}
export default LoginPageContainer;