import { Box, Divider, Stack, Typography } from "@mui/material"
import { projects } from "../../data/projects"
import { ProjectCard } from "../index/components/ProjectCard"
import { Outlet } from "react-router-dom"

export const Projects = () => {
  return (
    <div>
      <ProjectList />
    </div>
  )
}

const ProjectList = () => {
  return (
    <>
      <Outlet />
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ flexWrap: "wrap", gap: 2 }}
      >
        <Box component="section">
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Active Projects
          </Typography>
          <Divider sx={{ border: 2, borderColor: "primary.main" }} />
          <Stack
            gap={2}
            direction={{ xs: "column", md: "row" }}
            flexWrap="wrap"
            sx={{ marginTop: 2 }}
          >
            {projects
              .filter((p) => p.type === "active")
              .map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
          </Stack>
        </Box>
        <Box component="section">
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Legacy Projects
          </Typography>
          <Divider sx={{ border: 2, borderColor: "primary.main" }} />
          <Stack
            gap={2}
            direction={{ xs: "column", md: "row" }}
            flexWrap="wrap"
            sx={{ marginTop: 2 }}
          >
            {projects
              .filter((p) => p.type === "legacy")
              .map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
          </Stack>
        </Box>
      </Stack>
    </>
  )
}
