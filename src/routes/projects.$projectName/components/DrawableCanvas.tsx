import { projects } from "../../../data/projects"
import { Box, Divider, Link, Stack, Typography } from "@mui/material"
import { ProjectImage } from "./project-image"

export const DrawableCanvasDetails = () => {
  const project = projects.find((project) => project.id === "drawable-canvas")!
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
          What is Drawable Canvas?
        </Typography>
        <Typography variant="body1">
          For many years I worked as a math teacher, online. And when I would
          have virtual sessions with students, I needed a large whiteboard to
          work out problems. I found the scratch pad in Khan Academy's exercises
          really useful, so I thought it would be a fun project to learn some
          Javascript skills by building a similar tool.
        </Typography>
        <Typography variant="body1">
          This is one of those few apps that I was able to build in a day, but
          still use regularly.
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Technologies Used
        </Typography>
        <Typography>This project uses the following technologies:</Typography>
        <ul>
          <li>
            <Typography>Javascript, HTML, and CSS.</Typography>
          </li>
        </ul>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where can I see the code?
        </Typography>
        <Typography
          component={Link}
          href="https://github.com/jb-1980/drawable_canvas"
          target="_blank"
          rel="noopener noreferrer"
        >
          drawable-canvas on GitHub
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where is a demo?
        </Typography>
        <Typography>
          You can visit{" "}
          <Link href="https://jb-1980.github.io/drawable_canvas/">
            jb-1980.github.io/drawable_canvas/
          </Link>{" "}
          and doodle for bit.
        </Typography>
      </Box>
    </Stack>
  )
}
