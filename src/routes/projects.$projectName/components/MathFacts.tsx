import { projects } from "../../../data/projects"
import { Box, Divider, Link, Stack, Typography } from "@mui/material"
import { ProjectImage } from "./project-image"

export const MathFactsDetails = () => {
  const project = projects.find((project) => project.id === "math-facts")!
  return (
    <Stack
      sx={{
        gap: 2,
      }}
    >
      <ProjectImage src={project.imgSrc} />
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {project.title}
      </Typography>
      <Divider sx={{ border: 2, borderColor: "primary.main" }} />
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          What is Math Facts?
        </Typography>
        <Typography variant="body1">
          When I was a kid, I was paired up with two students and our teacher
          gave use a stack of flash cards to drill each other on our times
          tables. I wanted to help my kids learn their math facts, so I built
          this app that they could use to practice one a phone while we were out
          and about.
        </Typography>
        <br />
        <Typography variant="body1">
          This app is a simple quiz app that asks the user to solve math
          problems and then they can check their answers and mark if they got it
          right or wrong.
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Technologies Used
        </Typography>
        <Typography>This project uses the following technologies:</Typography>
        <ul>
          <li>
            <Typography>
              React app bootstrapped with Create React App, fully re-written in
              Typescript.
            </Typography>
          </li>
        </ul>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where can I see the code?
        </Typography>
        <Typography
          component={Link}
          href="https://github.com/jb-1980/math-facts"
          target="_blank"
          rel="noopener noreferrer"
        >
          math-facts on GitHub
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where is a demo?
        </Typography>
        <Typography>
          You can visit{" "}
          <Link href="https://mathfacts.gilgenlabs.com/">
            mathfacts.gilgenlabs.com
          </Link>{" "}
          and give it a spin.
        </Typography>
      </Box>
    </Stack>
  )
}
