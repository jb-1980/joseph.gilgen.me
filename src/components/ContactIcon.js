import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { iphone } from '../lib/iphone_media_queries'

const ContactIcon = ({ link, icon, text}) =>
  <a href={link} className={css(styles.contactLink)}>
    <i className={`${icon} ${css(styles.contactIcon)}`} />
    <div className={css(styles.contactText)}>
      {text}
    </div>
  </a>

const styles = StyleSheet.create({
  contactLink: {
    textDecoration: 'none',
    color: '#3D3D3D',
  },
  contactIcon: {
    padding: 20,
  },
  contactText: {
    fontSize: '2rem',
    display: 'inline',
    [iphone.iphone6plus.base]: {
      //fontSize: '4rem',
    },
  },
})
export default ContactIcon
