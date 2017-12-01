import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import ReactTooltip from 'react-tooltip'

import { iphone } from '../lib/iphone_media_queries'

const NavBar = ({ changeContent }) =>
  <div className={css(styles.navbar)}>
    <i className={`fa fa-id-badge ${css(styles.navbarIcon)}`}
       data-tip="Me!"
       onClick={() => changeContent('profile')}></i>
     <i className={`fa fa-code-fork ${css(styles.navbarIcon)}`}
       data-tip="Projects"
       onClick={() => changeContent('projects')}>
    </i>
    <i className={`fa fa-code ${css(styles.navbarIcon)}`}
       data-tip="Skills"
       onClick={() => changeContent('skills')}>
    </i>
    <i className={`fa fa-address-card ${css(styles.navbarIcon)}`}
       data-tip="Contact"
       onClick={() => changeContent('contact')}>
    </i>
    <ReactTooltip />
  </div>

const styles = StyleSheet.create({
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    minWidth: '50%',
    height: '3rem',
    padding: '20px',
    [iphone.iphone5.base]: {
      width: '100%',
    },
  },
  navbarIcon: {
    color: '#fff',
    fontSize: '3rem',
    cursor: 'pointer',
    [iphone.iphone5.base]: {
    },
  },
})

export default NavBar
