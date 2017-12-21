import React from "react"
import { StyleSheet, css } from "aphrodite"

import Project from "./project"
import SectionHeader from "./section-header"
import { projects } from "../data"

const Projects = () => {
  const projectNodes = projects.map(project => (
    <Project
      key={project.name}
      name={project.name}
      url={project.url}
      readme={project.readme}
      screenshot={project.screenshot}
    />
  ))

  return (
    <div className={css(styles.projects)} id="projects">
      <SectionHeader name="Projects" />
      <div className={css(styles.projectsContainer)}>{projectNodes}</div>
    </div>
  )
}

const styles = StyleSheet.create({
  projects: {
    fontSize: "1rem",
    fontFamily: "ubuntu",
    minHeight: "100vh",
    width: "100%",
    maxWidth: 1580,
  },
  projectsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
})

export default Projects
