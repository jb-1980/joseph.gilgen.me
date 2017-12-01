import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import profileImg from '../images/profile_img.png'

const Profile = () => (
  <div className={css(styles.profile)}>
    <section className={css(styles.profileImg)}>
      <img src={profileImg} alt="profile" style={{ height: '100%' }}/>
    </section>
    <section className={css(styles.introduction)}>
      <h1 className={css(styles.name)}>Joseph Gilgen</h1>
      <h3 className={css(styles.description)}>Builder of things</h3>
      <hr style={{ width: '100%' }}/>
      <p className={css(styles.introText)}>
        I love to teach and am interested in building tools that make teaching
        more awesome and efficient.
      </p>
    </section>
  </div>
)

const styles = StyleSheet.create({
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    transition: 'height 1.8s',
    flexFlow: 'column',
    alignItems: 'center',
  },
  introduction: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
    flexDirection: 'column',
    padding: 20,
    fontFamily: 'ubuntu',
  },
  description: {
    marginTop: 0,
    marginBottom: 0,
    fontSize: '1.5rem',
    color: '#5D5D5D'
  },
  name: {
    fontSize: '3rem',
    margin: 0,
  },
  introText: {
    fontWeight: '300',
    fontFamily: 'Archivo',
  },
  profileImg: {
    height: 200,
    width: 200,
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '20px 0px',
  },
})

export default Profile
