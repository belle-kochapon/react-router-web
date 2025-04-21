import UserRegisterForm from "../components/UserRegisterForm";
import { Link } from "react-router-dom";

// Create function separately in a component name "UserRegisterForm.tsx", then import it here
function Login() {
  return (
    <>
       <UserRegisterForm></UserRegisterForm> 
       <Link to={"/"}>
        <button>Back to Dashboard</button>
       </Link>
    </>
  );
}

export default Login;