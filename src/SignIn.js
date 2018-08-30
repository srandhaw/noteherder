import React from 'react'
import './SignIn.css'
import googleLogo from './google.svg'
import quill from './quill.svg'


const SignIn = (props) => {
    return(
        <div className="SignIn">
      <header className="Header" >
        <img src = {quill} alt="" style = {styles.quilll}/>
        <span className="title">Noteherder</span>
      </header>
      <main>
        <h3>Hey, Nerd! You Like Notes?</h3>
        <p>You never know when you'll need to write crap down. In fact, you should probably be taking notes right now.</p>
        <button
          className="github"
          onClick={props.handleAuth}
        >
          <i className="fab fa-github"></i>
          Sign in with GitHub
        </button>
        <button className="google">
          <img src={googleLogo} alt="" />
          Sign in with Google
        </button>
      </main>
    </div>
    )
}

export default SignIn

const styles = {
    quilll: {
        width: '3rem',
    }
}