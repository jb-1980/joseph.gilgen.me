export const TAGS = {
  FREE_CODE_CAMP: "freeCodeCamp",
  JQUERY: "jQuery",
  CANVAS: "canvas",
}

export const projects = [
  {
    name: "Drawable Canvas",
    screenshot: require("../images/screenshots/drawable-canvas.png"),
    url: "https://jb-1980.github.io/drawable_canvas/",
    readme: "https://github.com/jb-1980/drawable_canvas/blob/master/README.md",
  },
  {
    name: "Student Tracker",
    screenshot: require("../images/screenshots/student-tracker.png"),
    url: "",
    readme: "",
  },
  {
    name: "Mission Explorer",
    screenshot: require("../images/screenshots/mission-explorer.png"),
    url: "http://missionexplorer.gilgenlabs.com/",
    readme: "https://github.com/jb-1980/mission_explorer/blob/master/README.md",
  },
  {
    name: "Grade Syncer",
    screenshot: require("../images/screenshots/grade-syncer.png"),
    description: `Our math department loves Khan Academy, but without an efficient
    method to convert progress into grades we felt like we could not reasonably
    use its content for anything other than remediation. But luckily they have
    an extensive and well documented API. This project is a UI to connect courses`,
  },
  {
    name: "Quick Thoughts",
    screenshot: require("../images/screenshots/quick-thoughts.png"),
    url: `${process.env.PUBLIC_URL}/projects/quick-thoughts/`,
    readme: `${process.env.PUBLIC_URL}/projects/quick-thoughts/README.md`,
  },
  {
    name: "Pomodo Clock",
    screenshot: require("../images/screenshots/pomodo-clock.png"),
    url: `${process.env.PUBLIC_URL}/projects/pomodo-clock/`,
    readme: `${process.env.PUBLIC_URL}/projects/pomodo-clock/README.md`,
    tags: [TAGS.FREE_CODE_CAMP, TAGS.JQUERY, TAGS.CANVAS],
  },
  {
    name: "JS Calculator",
    screenshot: require("../images/screenshots/js-calculator.png"),
    url: `${process.env.PUBLIC_URL}/projects/js-calculator/`,
    readme: `${process.env.PUBLIC_URL}/projects/js-calculator/README.md`,
    tags: [TAGS.FREE_CODE_CAMP, TAGS.JQUERY],
  },
]
