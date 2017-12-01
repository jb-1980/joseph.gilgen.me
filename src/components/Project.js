import React from 'react'
import { StyleSheet, css } from 'aphrodite'

export default ({ name, description, stack, screenshot }) => {
  console.log(screenshot)
  return (
    <div className={css(styles.project)}>
      {screenshot && <img className={css(styles.projectImg)} src={screenshot} alt="project-screenshot"/>}      
      <div className={css(styles.descriptionWrapper)}>
        <h1 style={{ marginTop: 0, marginBottom: 0 }}>{name}</h1>
        <hr style={{width: '100%'}} />
        <p>{description}</p>
        <p><b>Stack:</b> {stack}</p>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  project: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: 20,
    borderBottom: '1px solid #5D5D5D',
    flexWrap: 'wrap',
  },
  projectImg: {
    width: 320,
    height: 180,
    minWidth: 320,
    flexBasis: 320,
  },
  descriptionWrapper: {
    paddingLeft: 20,
  },
})
