import React from 'react'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import base from './base'

class Main extends React.Component{
    constructor() {
        super()
        this.state = {

            currentNote: this.blankNote(),

          notes: [],
        }
      }

      blankNote = () => {
        return {
          id: null,
          title: '',
          body: '',
        }
      }

      componentDidMount(){
        this.notesRef = base.syncState(`${this.props.uid}`, {
          context: this,
          state: 'notes',
          asArray: true,
        })
      }

      componentWillUnmount() {
        base.removeBinding(this.notesRef)
      }

      resetCurrentNote = () => {
        this.setCurrentNote(this.blankNote())
      }

      setCurrentNote = (note) => {
        this.setState({ currentNote: note })
      }

      saveNote = (note) => {
        const notes = [...this.state.notes]
         if (!note.id) {
          note.id = Date.now()
          notes.push(note)
        } else {
          const i = notes.findIndex(currentNote => currentNote.id === note.id)
          notes[i] = note
        }
         this.setState({ notes })
        this.setCurrentNote(note)
      }

      deleteNote = (note) =>{
        const notes = [...this.state.notes]

        const i = notes.findIndex(currentNote => this.state.id === note.id)
        notes.splice(i,1)

        this.setState({ notes })
        this.resetCurrentNote()

      }

    render(){
        return(
            <div className="Main" style = {style}>
                        <Sidebar resetCurrentNote={this.resetCurrentNote}  signOut={this.props.signOut}/>
                        <NoteList notes={this.state.notes} setCurrentNote = {this.setCurrentNote}/>
                        <NoteForm currentNote={this.state.currentNote} saveNote = {this.saveNote} deleteNote = {this.deleteNote}/>
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