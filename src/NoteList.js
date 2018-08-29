import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = (props) => {
  
  return (
    <div className="NoteList">
          <h3>Notes</h3>
      <ul id="notes">
        <a className="active">
          { props.notes.map(note => <Note key={note.id} note={note} setCurrentNote={props.setCurrentNote}/>)}
        </a>
      </ul>
        </div>
  )
}

export default NoteList