import React from 'react'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import base from './base'
import { Route, Switch } from 'react-router-dom'

class Main extends React.Component{
    constructor() {
        super()
        this.state = {
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

      componentWillMount(){
        this.notesRef = base.syncState(`notes/${this.props.uid}`, {
          context: this,
          state: 'notes',
          asArray: true,
        })
      }

      componentWillUnmount() {
        base.removeBinding(this.notesRef)
      }

      saveNote = (note) => {
        let shouldRedirect = false
        const notes = [...this.state.notes]

        const timestamp = Date.now()
        note.updatedAt = timestamp

         if (!note.id) {
           
          note.id = timestamp
          notes.push(note)
          shouldRedirect = true
        

        } else {
          const i = notes.findIndex(currentNote => currentNote.id === note.id)
          notes[i] = note
      
        }

        notes.sort((a, b) => {
          return b.updatedAt - a.updatedAt
        })
        
         this.setState({ notes })

         

         if (shouldRedirect) {
          this.props.history.push(`/notes/${note.id}`)
        }
      }

      deleteNote = (note) =>{
        const notes = [...this.state.notes]

        const i = notes.findIndex(currentNote => note.id === currentNote.id)
        if (i > -1) {
          notes.splice(i, 1)
          this.setState({ notes })
          this.props.history.push('/notes')
        }
        

      }

    render(){

      const formProps = {
        saveNote: this.saveNote,
        deleteNote: this.deleteNote,
        notes: this.state.notes,
      }

        return(
            <div className="Main" style = {style}>
                        <Sidebar   signOut={this.props.signOut}/>
                        <NoteList notes={this.state.notes} />

       <Switch>

          <Route
            path="/notes/:id"
            render={navProps => (
              <NoteForm
                {...formProps}
                {...navProps}
              />
            )}
          />

          <Route
            render={navProps => (
              <NoteForm
                {...formProps}
                {...navProps}
              />
            )}
          />

       </Switch>
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