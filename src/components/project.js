import React from "react"
import { StyleSheet, css } from "aphrodite"

export default ({ name, url, readme, screenshot }) => {
  return (
    <div className={css(styles.project)}>
      <img className={css(styles.projectImg)} src={screenshot} alt={name} />
      <div className={css(styles.overlay)}>
        <span className={css(styles.overlayName)}>{name}</span>
        <div className={css(styles.overlayLinks)}>
          <a
            href={url}
            className={css(styles.overlayUrl)}
            rel="noopener noreferrer"
            target="_blank"
          >
            Link
          </a>
          <a
            href={readme}
            rel="noopener noreferrer"
            target="_blank"
            className={css(styles.overlayUrl)}
          >
            Readme.md
          </a>
        </div>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  project: {
    borderRadius: 20,
    position: "relative",
    overflow: "hidden",
    margin: 10,
    ":hover div": {
      opacity: 0.9,
    },
  },
  projectImg: {
    width: 500,
    height: 281,
    minWidth: 320,
    flexBasis: 320,
    ":after": {
      content: "'after'",
      display: "block",
      position: "absolute",
      top: 0,
      width: "100%",
      height: "100%",
      boxShadow: "inset 1px 1px 40px 0 rgba(0,0,0,.45)",
    },
  },
  overlay: {
    width: 500,
    height: 281,
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(200, 63, 1, 0.8)",
    opacity: 0.0,
    transition: "opacity 0.5s linear",
  },
  overlayLinks: {
    display: "flex",
    width: "100%",
  },
  overlayName: {
    width: "100%",
    height: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textShadow:
      "-1px 0 1px #000, 1px 0 1px #000, 0 -1px 1px #000, 0 1px 1px #000",
    color: "#018ac8",
    fontSize: "3rem",
  },
  overlayUrl: {
    width: "50%",
    textAlign: "center",
    paddingBottom: 10,
    textDecoration: "none",
    color: "#018ac8",
    textShadow:
      "-1px 0 1px #000, 1px 0 1px #000, 0 -1px 1px #000, 0 1px 1px #000 ",
  },
})
