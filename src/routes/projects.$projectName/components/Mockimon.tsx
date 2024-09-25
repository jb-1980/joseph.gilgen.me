import { projects } from "../../../data/projects"
import { Box, Divider, Link, Stack, Typography } from "@mui/material"
import { ProjectImage } from "./project-image"

export const MockimonDetails = () => {
  const project = projects.find((project) => project.id === "mockimon")!
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
          What is Mockimon?
        </Typography>
        <Typography variant="body1">
          This is a simple project that I built to help in teaching with
          concepts of an API and making API requests. The client I was working
          for was concerned about copyrighted images being used in the project,
          so I built this project to be able to use a simple API to get some
          data about the Mockimon.
        </Typography>
        <br />
        <Typography variant="body1">
          The project itself is a simple React app that is bootstrapped with
          Vite. The project uses Typescript for type safety and React for the
          view layer. The Mockimon characters themselves are generated from AI
          prompts to ChatGPT, and the images from an AI generator I found
          online.
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Technologies Used
        </Typography>
        <Typography>This project uses the following technologies:</Typography>
        <ul>
          <li>
            <Typography>Vite, React, Typescript, ChatGPT</Typography>
          </li>
        </ul>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where can I see the code?
        </Typography>
        <Typography
          component={Link}
          href="https://github.com/mockimon/mockimon.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mockimon on GitHub
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where is a demo?
        </Typography>
        <Typography>
          You can visit{" "}
          <Link href="https://mockimon.github.io/">mockimon.github.io</Link> and
          explore the world of the Mockimon.
        </Typography>
      </Box>
    </Stack>
  )
}
