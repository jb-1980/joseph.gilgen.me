import { projects } from "../../../data/projects"
import { Box, Divider, Link, Stack, Typography } from "@mui/material"
import { ProjectImage } from "./project-image"

export const MissionBuilderDetails = () => {
  const project = projects.find((project) => project.id === "mission-builder")!
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
        <Stack gap={1}>
          <Typography component="p" variant="body1">
            This project is the descendant of another project I had built to
            learn about React:{" "}
            <Link href="https://github.com/jb-1980/mission-control">
              mission control
            </Link>
            . I built mission builder as a method to quickly create content
            pages to import into our school's LMS. It features the ability to
            import a mission from Khan Academy, add and rearrange skills, and
            then create an zip file with the files necessary to build the course
            in our LMS. It also has the option to import all the assignments
            from a Khan Academy course you have created in your Khan Academy
            coach account.
          </Typography>
          <br />
          <Typography component="p" variant="body1">
            I think this is the first project where I moved away from a Flask
            backend over to Express. It was a great learning experience to see
            how the two frameworks compare.
          </Typography>
        </Stack>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Technologies Used
        </Typography>
        <Typography>This project uses the following technologies:</Typography>
        <ul>
          <li>
            <Typography>
              Node, Express, and MongoDB (Mongoose) on the backend.
            </Typography>
          </li>
          <li>
            <Typography>React on the front-end.</Typography>
          </li>
        </ul>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where can I see the code?
        </Typography>
        <Typography
          component={Link}
          href="https://github.com/jb-1980/mission-builder"
          target="_blank"
          rel="noopener noreferrer"
        >
          mission-builder on GitHub
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where is a demo?
        </Typography>
        <Typography>
          Since Khan Academy doesn't maintain a public API there are issues with
          syncing up with Khan Academy. I currently have no motivation to fix
          the project, so a demo is not available.
        </Typography>
      </Box>
    </Stack>
  )
}
