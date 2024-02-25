import SignupDiv from "./SignupDiv"
import XLogo from "./XLogo"

const Signup = ()=>{
    return(
        <>
        <div className="main-container">
            <XLogo/>
            <div className="signup-container">
                <SignupDiv/>
            </div>
        </div>
        
        </>
    )
}

export default Signup