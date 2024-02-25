import "./SignupDiv.css"

const SignupDiv = ()=>{
    return(
        <div className="signupdiv">
            <h1>Happening now</h1>
            <h3>Join today.</h3>
            <button>Sign in with google</button>
            <button>Continue as a guest</button>
            <fieldset className="title">
            <legend>or</legend>
          </fieldset>
          <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
          <button>Create account</button>
          <div className="signin">
            <h3>Already have an account?</h3>
            <button>Sign in</button>
          </div>
        </div>
        
    )
}

export default SignupDiv