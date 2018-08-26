import React from 'react'
import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

class Sidebar extends React.Component{
    render(){
        return(
            <div className = "Sidebar"  style={styles.sidebar}>

             <div className="logo" style={styles.logo}>
        <img src={quill} alt="Noteherder" style={styles.logoImg} />
      </div>

      <a href="/notes">
        <img
          src={newHover}
          alt="New note"
        />
        <img
          src={newIcon}
          alt="New note"
        />
      </a>

<div className="SignOut">
        <button>
          <i className="fa fa-sign-out"></i>
        </button>
      </div>
            </div>
        )
    }
}

export default Sidebar

const styles = {
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
      }
}