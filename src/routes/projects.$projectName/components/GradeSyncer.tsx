import { projects } from "../../../data/projects"
import { Box, Divider, Stack, Typography } from "@mui/material"
import { ProjectImage } from "./project-image"

export const GradesyncerDetails = () => {
  const project = projects.find((project) => project.id === "gradesyncer")!
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
          What is Grade Syncer?
        </Typography>
        <Typography variant="body1">
          This is really the evolution of my beginnings as a developer. The
          first seeds of this project were planted when I was a teacher and
          needed to get my student data out of Khan Academy, and discovered
          their API. It started as a simple Python script I manually ran on my
          computer, and over the years evolved into a full-fledged web app.
        </Typography>
        <br />
        <Typography variant="body1">
          This app is what our math department would use to connect a class in
          our LMS with a 3rd party tool. By configuring some parameters in the
          UI, we could store those in a database and use them to sync data from
          other platforms into the LMS. By the time I left the project, we had
          integrations with Khan Academy, MoneySkills, Actively Learn and
          Pearson Realize.
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Technologies Used
        </Typography>
        <Typography>This project uses the following technologies:</Typography>
        <ul>
          <li>
            <Typography>MongoDB for the database</Typography>
          </li>
          <li>
            <Typography>Express and Apollo Server on the backend</Typography>
          </li>
          <li>
            <Typography>React and Apollo Client on the frontend</Typography>
          </li>
        </ul>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where can I see the code?
        </Typography>
        <Typography>
          The code for this project is currently in a private repo I need to
          remove some proprietary pieces from before making public.
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where is a demo?
        </Typography>
        <Typography>
          This was always a private project, and only worked with our LMS, so
          there is no demo available.
        </Typography>
      </Box>
    </Stack>
  )
}
