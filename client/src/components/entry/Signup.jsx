import SignupDiv from "./SignupDiv"
import XFooter from "./XFooter"
import XLogo from "./XLogo"
import "./Signup.css"

const Signup = ()=>{
    return(
        <>
        <div className="main-container">
            <div className="main-content">
                <XLogo/>
                <SignupDiv/>
            </div>
            
            <XFooter/>
        </div>
        
        </>
    )
}

export default Signup