import React from "react"
import { StyleSheet, css } from "aphrodite"

import ContactIcon from "./ContactIcon"
import SectionHeader from "./section-header"
import { iphone } from "../lib/iphone_media_queries"

const Contact = () => (
  <div className={css(styles.contact)} id="contact">
    <SectionHeader name="Contact Me" />
    <div className={css(styles.contactBody)}>
      <div className={css(styles.contactGreeting)}>
        Thanks for checking out my portfolio page. If you are interested in
        building awesomeness together, you should get in contact with me
        at&nbsp;
        <a
          href="mailto:gilgenlabs@gmail.com"
          style={{
            textDecoration: "none",
            color: "#111",
            display: "inline-block",
          }}
        >
          gilgenlabs@gmail.com
        </a>.
      </div>
      <div className={css(styles.contactIcons)}>
        <ContactIcon
          link="https://github.com/jb-1980"
          icon="fa fa-github-square"
          text="Github"
        />
        <ContactIcon
          link="https://www.linkedin.com/in/josephgilgen/"
          icon="fa fa-linkedin-square"
          text="LinkedIn"
        />
        <ContactIcon
          link="/static/resume.pdf"
          icon="fa fa-file-text"
          text="Resume"
        />
        <ContactIcon
          link="mailto:gilgenlabs@gmail.com"
          icon="fa fa-envelope"
          text="Email"
        />
      </div>
    </div>
  </div>
)

const styles = StyleSheet.create({
  contact: {
    padding: 20,
    minHeight: "100vh",
    [iphone.iphone6plus.base]: {},
    width: "100%",
    maxWidth: 900,
  },
  contactHeader: {
    fontFamily: "ubuntu",
    textAlign: "center",
  },
  contactBody: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    flexFlow: "column",
  },
  contactIcons: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    flex: "0 0 300px",
    fontSize: "3rem",
    fontFamily: "ubuntu",
    [iphone.iphone5.base]: {
      flexBasis: "100%",
    },
  },
  contactGreeting: {
    flex: 2,
    fontFamily: "ubuntu",
    fontSize: "1.5rem",
    textAlign: "center",
    color: "#555",
    width: "100%",
    [iphone.iphone5.base]: {
      flexBasis: "100%",
      padding: "50px 20px",
    },
  },
})

export default Contact
