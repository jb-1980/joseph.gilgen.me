import { projects } from "../../../data/projects"
import { Box, Divider, Link, Stack, Typography } from "@mui/material"
import { ProjectImage } from "./project-image"

export const KhanSkillLinkerDetails = () => {
  const project = projects.find(
    (project) => project.id === "khan-skill-linker"
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
          What is Khan Skill Linker?
        </Typography>
        <Typography variant="body1">
          When I was a math teacher, I would create courses that would link
          students to Khan Academy exercises. After a few years of creating the
          links to the videos and exercises, I decided to build a tool that
          would allow me to quickly create the HTML I could paste into our
          content creation system.
        </Typography>
        <br />
        <Typography variant="body1">
          This app would work by using the Khan Academy API to search for skills
          and then when selected would get the details of the skills and create
          the HTML for the content.
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
          href="https://github.com/jb-1980/khan_skill_linker"
          target="_blank"
          rel="noopener noreferrer"
        >
          khan_skill_linker on GitHub
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where is a demo?
        </Typography>
        <Typography>
          You can find a dissappointing demo at{" "}
          <Link href="https://jb-1980.github.io/khan_skill_linker/">
            jb-1980.github.io/khan_skill_linker
          </Link>
          . Since all of Khan Academy's APIs have been removed, the app is now
          in a broken state.
        </Typography>
      </Box>
    </Stack>
  )
}
