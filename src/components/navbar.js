import React from "react"
import { StyleSheet, css } from "aphrodite"
import { Link } from "react-scroll"

import { iphone } from "../lib/iphone_media_queries"

const NavBar = () => (
  <div className={css(styles.navbar)}>
    <Link
      className={css(styles.navbarItem)}
      to="about-me"
      smooth="easeOutQuint"
      offset={-50}
    >
      Me
    </Link>
    <Link
      className={css(styles.navbarItem)}
      to="projects"
      smooth="easeOutQuint"
      offset={-50}
    >
      Projects
    </Link>
    <Link
      className={css(styles.navbarItem)}
      to="contact"
      smooth="easeOutQuint"
      offset={-50}
    >
      Contact
    </Link>
  </div>
)

const styles = StyleSheet.create({
  navbar: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "rgba(200, 63, 1, 1)",
    color: "#fff",
    height: "1.5rem",
    padding: "7px 20px",
    fontFamily: "Ubuntu",
    position: "fixed",
    top: "0",
    [iphone.iphone5.base]: {
      width: "100%",
    },
    zIndex: 10,
  },
  navbarItem: {
    fontSize: "1.2rem",
    cursor: "pointer",
    margin: "0 10px",
    textTransform: "uppercase",
    [iphone.iphone5.base]: {},
  },
})

export default NavBar
