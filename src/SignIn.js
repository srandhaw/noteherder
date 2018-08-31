import React from 'react'
import './SignIn.css'
import googleLogo from './google.svg'
import quill from './quill.svg'
import { auth, googleProvider } from './base'


const SignIn = (props) => {
  const authenticate = (provider) => {
    auth.signInWithPopup(provider)
  }
    return(
        <div className="SignIn">
      <header className="Header" style = {styles.header}>
        <img src = {quill} alt="" style = {styles.quilll}/>
        <span className="title" style = {styles.title}>Noteherder</span>
      </header>
      <main>
        <h3>Hey, Nerd! You Like Notes?</h3>
        <p>You never know when you'll need to write crap down. In fact, you should probably be taking notes right now.</p>
        
        <button className="google"
        onClick={() => authenticate(googleProvider)}>
          <img src={googleLogo} alt="" />
          Sign in with Google
        </button>
      </main>
    </div>
    )
}

export default SignIn

const styles = {
  header:{
    margin: '2rem',
    height: '50%',
    padding: '10% 0 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
    
  quilll: {
    width: '10rem',
    color: '#ffffff',
    backgroundColor: 'transparent'
  },

  title: {
    fontFamily: "Fauna One",
    color: '#ffffff',
    fontSize: '5rem',
    letterSpacing: '15px',
    textTransform: 'Uppercase',
  }
}