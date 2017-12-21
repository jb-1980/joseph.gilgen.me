import React from "react"
import { StyleSheet, css } from "aphrodite"

import NavBar from "./components/navbar"
import AboutMe from "./components/about-me"
import Projects from "./components/projects"
import Contact from "./components/contact"

const App = () => (
  <div className={css(styles.appWrapper)}>
    <NavBar />
    <AboutMe />
    <Projects />
    <Contact />
  </div>
)

const styles = StyleSheet.create({
  appWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "radial-gradient(#EAB7A0,#F1CFC0, #F8E7DF)",
  },
})

export default App
