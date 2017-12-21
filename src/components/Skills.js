import React from "react"
import { StyleSheet, css } from "aphrodite"

const Skills = () => {
  const skills = [
    "devicon-python-plain-wordmark",
    "devicon-react-original-wordmark",
    "devicon-javascript-plain",
    "devicon-github-plain-wordmark",
    "devicon-heroku-original-wordmark",
    "devicon-php-plain",
    "devicon-moodle-plain-wordmark"
  ].map((skill, i) => <i className={`${skill} ${css(styles.icon)}`} key={i} />)

  return <div className={css(styles.skills)}>{skills}</div>
}

const styles = StyleSheet.create({
  skills: {
    display: "flex",
    fontSize: "2rem",
    justifyContent: "space-around",
    alignContent: "space-around",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    paddingTop: 30,
    paddingBottom: 30
  },
  icon: {
    color: "#5D5D5D",
    margin: 10,
    ":before": {
      fontSize: 114
    }
  }
})

export default Skills
