import "./SignupDiv.css"
import google from "../../assets/google-logo.png"
import apple from "../../assets/apple-logo.png"

const SignupDiv = ()=>{
    return(
        <div className="signup-div">
            <h1>Happening now</h1>
            <h3>Join today.</h3>
            <div className="signup-div-middle">
              <button>
                <img src={google} alt="" />
                <p>Sign up with Google</p>  
              </button>
              <button>
                <img src={apple} alt="" />
                <p>Sign up with Apple</p>
              </button>
              <fieldset className="title">
                 <legend>or</legend>
              </fieldset>
              <button>Create account</button>
              <button>Continue as a guest</button>
              <p className="info-p">By signing up, you agree to the 
                <span> Terms of Service </span> and 
                <span> Privacy Policy</span>, including 
                <span> Cookie Use.</span>
              </p>        
          </div>
          <div className="sign-in">
            <h4>Already have an account?</h4>
            <button>Sign in</button>
          </div>
        </div>
        
    )
}

export default SignupDiv