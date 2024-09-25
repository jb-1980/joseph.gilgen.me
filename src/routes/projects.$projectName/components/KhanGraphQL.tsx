import { projects } from "../../../data/projects"
import { Box, Divider, Link, Stack, Typography } from "@mui/material"
import { ProjectImage } from "./project-image"

export const KhanGraphQLDetails = () => {
  const project = projects.find((project) => project.id === "khan-graphql")!
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
            Many of my early projects as a math teacher involved getting data
            from Khan Academy through their API. Unfortunately, the API was
            sunset and I needed a way to continue to get the data. So I would
            use the network tab in the Chrome developer tools to see the
            requests that were being made by the Khan Academy website, and I
            would reverse engineer the GraphQL queries that were being made.
          </Typography>
          <br />
          <Typography component="p" variant="body1">
            This project is class of methods that can be used to request data
            from Khan Academy using GraphQL. It doesn't use anything special,
            just Axios to make the requests and a few helper functions to make
            the queries.
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
            <Typography>Node, Axios</Typography>
          </li>
        </ul>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where can I see the code?
        </Typography>
        <Typography
          component={Link}
          href="https://github.com/jb-1980/khan-graphql"
          target="_blank"
          rel="noopener noreferrer"
        >
          khan-graphql on GitHub
        </Typography>
      </Box>
    </Stack>
  )
}
