import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Project from './Project'

const Projects = () => {
  const projects = [
    {
      name: 'Student Tracker',
      description: `I made this as a way to quickly and easily track when students
      are enrolled in my courses. Because I work for an online school, there was
      no real efficient event indicator for when a student had been enrolled. This
      queries our student management database and returns all my enrolles. Then
      I can store a flag with their record id and thus monitor which students are
      new or have already been processed.`,
      stack: 'Python, Flask, React, Redux, MongoDB',
      screenshot: require('../images/screenshots/student-tracker.png'),
    },
    {
      name: 'Mission Explorer',
      description: `In our math department we needed a simple way to put together
      a curriculum map that would outline our standards, and show its associated
      skills and resources. Mission explorer was a solution for that. It is simply
      a way to display meta data associated with Khan Academy missions such as which
      videos, prerequisites, and standards are associated with each skill in a
      mission.`,
      stack: 'Node, React, Redux, React Router',
      screenshot: require('../images/screenshots/mission-explorer.png'),
    },
    {
      name: 'Grade Syncer',
      description: `Our math department loves Khan Academy, but without an efficient
      method to convert progress into grades we felt like we could not reasonably
      use its content for anything other than remediation. But luckily they have
      an extensive and well documented API. This project is a UI to connect courses`,
    }
  ].map(project =>
    <Project
      key={project.name}
      name={project.name}
      description={project.description}
      stack={project.stack}
      screenshot={project.screenshot}
    />
  )

  return (
    <div className={css(styles.projects)}>
      {projects}
    </div>
  )
}


const styles = StyleSheet.create({
  projects: {
    fontSize: '1rem',
    fontFamily: 'ubuntu',
  },
})

export default Projects
