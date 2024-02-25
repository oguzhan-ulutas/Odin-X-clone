import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";



const ErrorPage = () => {
  const {errorMsg, setErrMsg} = useContext(AppContext)
  return (
    <div className="error">
        {errorMsg?
        <h1>{errorMsg}</h1>
        :<h1>Oh no, something went wrong!</h1>}
      
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;