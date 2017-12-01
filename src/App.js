import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import NavBar from './components/navbar'
import FocusedContent from './components/FocusedContent'



export default class App extends React.Component {
  constructor(){
    super()
    this.state = {contentPage: 'profile'}
    this.changeContent = this.changeContent.bind(this)
  }

  changeContent(contentPage) {
    this.setState({ contentPage })
  }

  render() {
    const { contentPage } = this.state

    return (
      <div className={css(styles.appWrapper)}>
        <NavBar changeContent={this.changeContent}/>
        <FocusedContent selected={contentPage}/>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  appWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }
})
