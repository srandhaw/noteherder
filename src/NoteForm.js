import React from 'react'

import './NoteForm.css'

const NoteForm = (props) => {

  const handleChanges = (ev) =>{
const note = {...props.currentNote}
note[ev.target.name] = ev.target.value
props.saveNote(note)
  }

  return (
    <div className="NoteForm">
      <div className="form-actions">
        <button type="button" onClick={props.deleteNote}>
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
      <form>
        <p>
          <input
            type="text"
            name="title"
            placeholder="Title your note"
            value={props.currentNote.title}
            onChange = {handleChanges}
          />
        </p>

        <textarea name="body"
        value={props.currentNote.body}
        onChange = {handleChanges}></textarea>
      </form>
    </div>
  )
}

export default NoteForm