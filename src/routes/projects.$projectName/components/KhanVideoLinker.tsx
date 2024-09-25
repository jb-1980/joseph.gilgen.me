import { projects } from "../../../data/projects"
import { Box, Divider, Link, Stack, Typography } from "@mui/material"
import { ProjectImage } from "./project-image"

export const KhanVideoLinkerDetails = () => {
  const project = projects.find(
    (project) => project.id === "khan-video-linker"
  )!
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
          What is Khan Video Linker?
        </Typography>
        <Typography variant="body1">
          When I was a math teacher, I found that I would try to constantly
          embed videos from Khan Academy into my lessons. But we used a custom
          video player that had buttons for each video in a lesson right below
          the player. All of this was done by writing custom HTML in our content
          creation system.
        </Typography>
        <br />
        <Typography variant="body1">
          I built this to allow me to automate the process of creating the HTML.
          The user could search for a video, and then select it to add to the
          list. And the app would then create the HTML for the user to copy and
          paste into our content creation system. This was a huge time saver for
          me and the rest of the teachers in our math department.
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Technologies Used
        </Typography>
        <Typography>This project uses the following technologies:</Typography>
        <ul>
          <li>
            <Typography>React and Redux</Typography>
          </li>
        </ul>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where can I see the code?
        </Typography>
        <Typography
          component={Link}
          href="https://github.com/jb-1980/khan-video-linker"
          target="_blank"
          rel="noopener noreferrer"
        >
          khan-video-linker on GitHub
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where is a demo?
        </Typography>
        <Typography>
          You can find a dissappointing demo at{" "}
          <Link href="https://jb-1980.github.io/khan-video-linker/">
            jb-1980.github.io/khan-video-linker
          </Link>
          . Since all of Khan Academy's APIs have been removed, the app is now
          in a broken state.
        </Typography>
      </Box>
    </Stack>
  )
}
