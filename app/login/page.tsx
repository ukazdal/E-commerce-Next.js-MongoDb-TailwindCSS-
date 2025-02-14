import { getCurrentUser } from "../actions/getCurentUser";
import LoginClient from "../components/auth/LoginClient";

const Login = async () => {
  const currentUser = await getCurrentUser();
  return (
    <>
      <LoginClient currentUser={currentUser} />
    </>
  );
};

export default Login;
