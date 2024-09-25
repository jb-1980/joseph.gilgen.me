import { Divider, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { ProjectCard } from "./ProjectCard"
import { projects } from "../../../data/projects"

export const Projects = () => {
  return (
    <Stack spacing={1}>
      <Stack direction="row" alignItems="center">
        <Typography variant="h5" style={{ flex: 1 }}>
          Projects
        </Typography>
        <Typography
          component={Link}
          to="/projects"
          sx={{
            textDecoration: "none",
            color: "primary.main",
            "&:hover": { color: "secondary.main" },
          }}
          color="inherit"
        >
          View all projects
        </Typography>
      </Stack>
      <Divider sx={{ border: 2, borderColor: "primary.main" }} />
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </Stack>
    </Stack>
  )
}
