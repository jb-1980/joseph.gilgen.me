import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Profile from './Profile'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

import { iphone } from '../lib/iphone_media_queries'

const FocusedContent = ({ selected }) =>
  <div className={css(styles.focusedContent)}>
    {
      (selected === 'profile' && <Profile />) ||
      (selected === 'projects' && <Projects />) ||
      (selected === 'skills' && <Skills />) ||
      (selected === 'contact' && <Contact />)
    }
  </div>

const styles = StyleSheet.create({
  focusedContent: {
    background: '#fff',
    minWidth: '50%',
    maxWidth: '70%',
    [iphone.iphone5.base]: {
      minWidth: '95%',
    }
  },
})
export default FocusedContent
