import { projects } from "../../../data/projects"
import { Box, Divider, Link, Stack, Typography } from "@mui/material"
import { ProjectImage } from "./project-image"

export const PomodoroDetails = () => {
  const project = projects.find((project) => project.id === "pomodoro-clock")!
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
          What is Pomodoro Clock?
        </Typography>
        <Typography variant="body1">
          I was prompted to build this project as part of the FreeCodeCamp
          Frontend Libraries Certification. The Pomodoro Clock is a time
          management technique that uses a timer to break down work into
          intervals, traditionally 25 minutes in length, separated by short
          breaks.
        </Typography>
        <br />
        <Typography variant="body1">
          This project became different from the other FreeCodeCamp projects
          because I have found it to continue to be useful in my daily work. I
          have revisted and refactored the project a few times to use hooks and
          other React features, as well as learning how to use Jest.
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Technologies Used
        </Typography>
        <Typography>This project uses the following technologies:</Typography>
        <ul>
          <li>
            <Typography>React and Jest</Typography>
          </li>
        </ul>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where can I see the code?
        </Typography>
        <Typography
          component={Link}
          href="https://github.com/jb-1980/react-pomodoro-clock"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-pomodoro-clock on GitHub
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where is a demo?
        </Typography>
        <Typography>
          You can visit{" "}
          <Link href="https://pomodoro.gilgenlabs.com/">
            pomodoro.gilgenlabs.com
          </Link>{" "}
          when you are ready for a deep work session.
        </Typography>
      </Box>
    </Stack>
  )
}
