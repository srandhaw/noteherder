import React from 'react'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component{
    render(){
        return(
            <div className="Main" style = {style}>
            <Sidebar />
            <NoteList />
            <NoteForm />
            </div>
        )
    }
}

export default Main

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
  }