import { projects } from "../../../data/projects"
import { Box, Divider, Link, Stack, Typography } from "@mui/material"
import { ProjectImage } from "./project-image"

export const ChessPlaygroundDetails = () => {
  const project = projects.find((project) => project.id === "chess-playground")!
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
          What is Chess Playground?
        </Typography>
        <Typography variant="body1">
          I often like to play with new technologies as they are emerging.
          Sometimes I will read about a new coding pattern that I would like to
          explore. This project is a place for me to play with new technologies
          and ideas using a hobby of mine, chess.
        </Typography>
        <Typography variant="body1">
          The project itself has a single front-end that is currently built with
          Vite, React, and Typescript. I have been experimenting with different
          back-end technologies such as Node.js, PHP, and Python. So, you may
          not know which back-end technology you will get when you visit the
          site.
        </Typography>
        <Typography variant="body1">
          Part of the challenge has been with websockets. Socket.io is a popular
          package for websockets, but used with Node. So I have had to stick
          with the basics of websockets and have been using the native WebSocket
          API for the client.
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
              React, Typescript, and Vite for the front-end.
            </Typography>
          </li>
          <li>
            <Typography>
              Node.js, with Express, Websockets, and MongoDB.
            </Typography>
          </li>
          <li>
            <Typography>PHP with Symfony, Doctrine, and Postgres.</Typography>
          </li>
        </ul>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where can I see the code?
        </Typography>
        <Typography
          component={Link}
          href="https://github.com/jb-1980/chess-playground"
          target="_blank"
          rel="noopener noreferrer"
        >
          chess-playground on GitHub
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where is a demo?
        </Typography>
        <Typography>
          You can visit{" "}
          <Link href="https://chess.gilgen.me">chess.gilgen.me</Link> to see the
          project in action.
        </Typography>
      </Box>
    </Stack>
  )
}
