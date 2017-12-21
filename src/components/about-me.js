import React from "react"
import { StyleSheet, css } from "aphrodite"
import profileImg from "../images/profile_img.png"

const Profile = () => (
  <div className={css(styles.profile)} id="about-me">
    <section className={css(styles.profileImg)}>
      <img src={profileImg} alt="profile" style={{ height: "100%" }} />
    </section>
    <section className={css(styles.introduction)}>
      <h1 className={css(styles.name)}>Joseph Gilgen</h1>
      <hr style={{ width: "100%", border: "3px solid #c83f01" }} />
      <p className={css(styles.introText)}>
        I am a teacher and self-taught software developer. I learned to code
        after needing a tool to import student progress for my gradebook, and
        have left a trail of small projects in my wake as I have been refining
        my skills through the years. Please take the time to view some of my
        projects below, and thanks for visiting!
      </p>
    </section>
  </div>
)

const styles = StyleSheet.create({
  profile: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    maxWidth: "600px",
    minHeight: "100vh",
    transition: "height 1.8s",
    flexFlow: "column",
    alignItems: "center",
  },
  introduction: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
    fontFamily: "ubuntu",
  },
  name: {
    fontSize: "3.4rem",
    margin: 0,
  },
  introText: {
    fontFamily: "Coda",
    fontSize: "1.2rem",
  },
  profileImg: {
    height: 200,
    width: 200,
    borderRadius: "50%",
    overflow: "hidden",
    margin: "20px 0px",
  },
})

export default Profile
