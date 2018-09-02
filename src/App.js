import React, { Component } from 'react';
import './App.css';
import Main from './Main'
import { auth } from './base'
import SignIn from './SignIn'
import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  state = {
    uid: null,
  }

  componentWillMount(){

  auth.onAuthStateChanged(user =>{
    
    if(user){
      this.handleAuth(user)
    }
    else{
      this.signOut()
    }
  })
  }

   handleAuth = (user) => {
    this.setState({ uid: user.uid })
  }
   signedIn = () => {
    return this.state.uid
  }
   signOut = () => {
    this.setState({ uid: null })
    auth.signOut()
  }
  render() {
    return (
      <div className="App">
      {/* {
        this.signedIn()
        ? 
        <Main signOut = {this.signOut} uid={this.state.uid}/> 
        :
         <SignIn handleAuth ={this.handleAuth}/>
      } */}

        <Switch>

      <Route
            path="/sign-in"
            render={(navProps) => (
              this.signedIn()
                ? <Redirect to="/notes" />
                : <SignIn {...navProps}/>
            )}
          />

      <Route
            path="/notes"
            render={(navProps) => (
              this.signedIn()
               ? <Main signOut={this.signOut} uid={this.state.uid} {...navProps} />
               : <Redirect to="/sign-in" />
            )}
          />

          <Route
            render={() => (
              this.signedIn()
                ? <Redirect to="/notes" />
                : <Redirect to="/sign-in" />
            )}
          />

        </Switch>
       
      </div>
    );
  }
}

export default App;
