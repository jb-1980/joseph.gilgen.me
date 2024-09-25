import ghostmailUrl from "@assets/images/ghostmail.dev.png"
import chessPlaygroundUrl from "@assets/images/chess-playground.png"
import pomodoroUrl from "@assets/images/pomodoro.png"
import drawableCanvasUrl from "@assets/images/drawable-canvas.png"
import mathFactsUrl from "@assets/images/math-facts.png"
import mockimonUrl from "@assets/images/mockimon.png"
import studenttrackerUrl from "@assets/images/studenttracker.png"
import missionBuilderUrl from "@assets/images/mission-builder.png"
import khanSkillLinkerUrl from "@assets/images/khan_skill_linker.png"
import khanVideoLinkerUrl from "@assets/images/khan-video-linker.png"
import gradesyncerUrl from "@assets/images/gradesyncer.png"
import khanGraphqlUrl from "@assets/images/khan-graphql.png"

export const projects = [
  {
    id: "ghostmail",
    title: "Ghostmail.dev",
    imgSrc: ghostmailUrl,
    description:
      "A simple email capturing service for your dev environment. Create a unique email account and get an SMTP server string that will capture all emails and drop it in the same inbox.",
    tags: ["Node", "Remix", "MongoDB"],
    link: "/projects/ghostmail",
    date: "2024-07-01",
    type: "active",
  },
  {
    id: "chess-playground",
    title: "Chess Playground",
    imgSrc: chessPlaygroundUrl,
    description:
      "A simple chess app that serves as a playground for trying out new technologies. One client, many servers.",
    tags: ["React", "Express", "Python", "Flask", "Websockets"],
    link: "/projects/chess-playground",
    date: "2024-09-14",
    type: "active",
  },
  {
    id: "student-tracker",
    title: "Student Tracker",
    description:
      "A SPA to manage working with students in our online school. Tracks when students are added/dropped as well as their academic progress.",
    imgSrc: studenttrackerUrl,
    tags: ["React", "Redux", "Python", "MongoDB", "Flask", "Outlook API"],
    link: "/projects/student-tracker",
    date: "2016-10-20",
    type: "legacy",
  },
  {
    id: "mission-builder",
    title: "Mission Builder",
    description:
      "A simple app to quickly create content files for our school's LMS",
    imgSrc: missionBuilderUrl,
    tags: ["React", "Express", "MongoDB"],
    link: "/projects/mission-builder",
    date: "2016-03-31",
    type: "legacy",
  },
  {
    id: "khan-skill-linker",
    title: "Khan Skill Linker",
    description:
      "A simple app to build the html for a lesson page that links to a specific skill in Khan Academy.",
    imgSrc: khanSkillLinkerUrl,
    tags: ["React", "Redux", "API"],
    link: "/projects/khan-skill-linker",
    date: "2016-08-25",
    type: "legacy",
  },

  {
    id: "drawable-canvas",
    title: "Drawable Canvas",
    description: `I found the scratch pad in Khan Academy's exercises really useful. This
        app seeks to emulate that functionality. It is just a full page svg, but
        includes the ability to select colors, undo, and erase.`,
    imgSrc: drawableCanvasUrl,
    tags: ["JavaScript", "HTML", "CSS"],
    link: "/projects/drawable-canvas",
    date: "2017-08-22",
    type: "active",
  },
  {
    id: "math-facts",
    title: "Math Facts",
    description: "A simple math facts quiz app.",
    imgSrc: mathFactsUrl,
    tags: ["React", "Typescript"],
    link: "/projects/math-facts",
    date: "2018-01-13",
    type: "active",
  },
  {
    id: "pomodoro-clock",
    title: "Pomodoro Clock",
    description:
      "A timer to help you focus. Built with React and fully tested with Jest.",
    imgSrc: pomodoroUrl,
    tags: ["React", "Jest"],
    link: "/projects/pomodoro-clock",
    date: "2018-05-07",
    type: "active",
  },
  {
    id: "khan-video-linker",
    title: "Khan Video Linker",
    description:
      "Small app to easily create an embeddable video list of Khan Academy videos.",
    imgSrc: khanVideoLinkerUrl,
    tags: ["React", "Redux", "API"],
    link: "/projects/khan-video-linker",
    date: "2018-11-07",
    type: "legacy",
  },
  {
    id: "gradesyncer",
    title: "Gradesyncer",
    description: "A tool to sync grades from 3rd party services to our LMS.",
    imgSrc: gradesyncerUrl,
    tags: ["React", "Redux", "GraphQL", "MongoDB", "Apollo", "Express"],
    link: "/projects/gradesyncer",
    date: "2019-11-09",
    type: "legacy",
  },
  {
    id: "mockimon",
    title: "Mockimon",
    description:
      "A simple json api of mock pokemon data that can be used to teach and learn about APIs without worry of copyright issues.",
    imgSrc: mockimonUrl,
    tags: ["Vite", "React", "Typescript", "API"],
    link: "/projects/mockimon",
    date: "2023-12-02",
    type: "active",
  },
  {
    id: "khan-graphql",
    title: "Khan GraphQL",
    description:
      "A layer over Khan Academy's API to make it easier to query for data.",
    imgSrc: khanGraphqlUrl,
    tags: ["Node", "GraphQL", "API"],
    link: "/projects/khan-graphql",
    date: "2024-08-25",
    type: "legacy",
  },
]
