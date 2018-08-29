import React from 'react'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

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

    render(){
        return(
            <div className="Main" style = {style}>
            <Sidebar resetCurrentNote={this.resetCurrentNote}/>
            <NoteList notes={this.state.notes} setCurrentNote = {this.setCurrentNote}/>
            <NoteForm currentNote={this.state.currentNote} saveNote = {this.saveNote}/>
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