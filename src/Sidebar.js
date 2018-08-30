import React from 'react'
import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'
import { StyleSheet, css } from 'aphrodite'

class Sidebar extends React.Component{
   
    
    render(){
        return(
            <nav className={css(styles.sidebar)}>

             <div className={css(styles.logo)}>
        <img src={quill} alt="Noteherder" className={css(styles.logoImg)} />
      </div>

      <a 
        href="/notes"
        className={css(styles.newNote)}
        onClick={(ev) => {
          ev.preventDefault()
          this.props.resetCurrentNote()
        }}>
        <img
          src={newHover}
          alt="New note"
          className={css(styles.newNoteImg)}
        />
        <img
          src={newIcon}
          alt="New note"
          className={css(styles.newNoteImg, styles.newNoteImgHover)}
        />
      </a>

<div className={css(styles.signOut)}>
        <button className={css(styles.button)} onClick = {this.props.signOut}>
        <i
            className={`fas fa-sign-out-alt`}
            title="sign out"
          ></i>
        </button>
      </div>
            </nav>
        )
    }
}

export default Sidebar

const styles = StyleSheet.create({
    sidebar: {
        width: '6rem',
        backgroundColor: '#f3f3f3',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    logo: {
        fontFamily: '"Fauna One"',
        color: '#666',
        fontSize: '3rem',
      },

        logoImg: {
        width: '3rem',
        paddingLeft: '0.4rem',
      },

      newNote: {
        marginTop: '2rem',
        position: 'relative',
        width: '4rem',
      },

      newNoteImg: {
        position: 'absolute',
        left: '0',
        width: '100%',
        transition: 'opacity 0.25s ease-in-out',
      },

      signOut: {
        position: 'absolute',
        bottom: '1rem',
      },

     

      button: {
        backgroundColor: 'transparent',
        border: '0',
        color: '#008bf8',
        cursor: 'pointer',
        outline: 'none',
        fontSize: '2rem',
      },

      newNoteImgHover: {
        ':hover': {
          opacity: 0,
        },
      },
})