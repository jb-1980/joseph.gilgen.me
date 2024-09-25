import { projects } from "../../../data/projects"
import { Box, Divider, Link, Stack, Typography } from "@mui/material"
import { ProjectImage } from "./project-image"

export const FlexDatesDetails = () => {
  const project = projects.find((project) => project.id === "flexdates")!
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
          What is {project.title}?
        </Typography>
        <Typography variant="body1">{project.description}</Typography>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Technologies Used
        </Typography>
        <Typography>This project uses the following technologies:</Typography>
        <ul>
          <li>
            <Typography>PHP Moodle</Typography>
          </li>
        </ul>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where can I see the code?
        </Typography>
        <Typography
          component={Link}
          href="https://github.com/jb-1980/flexdates"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/jb-1980/flexdates
        </Typography>
      </Box>
    </Stack>
  )
}
