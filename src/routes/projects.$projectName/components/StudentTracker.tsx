import { projects } from "../../../data/projects"
import { Box, Divider, Stack, Typography } from "@mui/material"
import { ProjectImage } from "./project-image"
import studenttrackerScreenshotUrl from "@assets/screenshots/student-tracker.png"

export const StudentTrackerDetails = () => {
  const project = projects.find((project) => project.id === "student-tracker")!
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
            Our online school had a program that allowed students to enroll at
            any time of the year, and work through the curriculum at their own
            pace. As a math teacher, this presented a problem of knowing when
            new students were enrolled, when they dropped, and how they were
            progressing through the curriculum. I would spend hours each week
            updating a spreadsheet with this information. I decided to build a
            web application that would track this information for me.
          </Typography>
          <Typography component="p" variant="body1">
            What started as a simple application to check surface newly enrolled
            students grew into a full-fledged application that would track when
            students were added and dropped, and create alerts when students
            were falling behind.
          </Typography>
          <Typography component="p" variant="body1">
            I had even integrated the Outlook API to send me an email when a
            student was falling behind, that could be generated from a template.
          </Typography>
          <Typography component="p" variant="body1">
            Eventually, taking the time to create this application saved me
            hours each week, and allowed me to place my focus where it was
            needed most: helping students.
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
            <Typography>Python, Flask, and MongoDB on the backend.</Typography>
          </li>
          <li>
            <Typography>React and Redux on the front-end.</Typography>
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
          I hope to get a demo up soon, but I need to change up the server code
          to serve mock data instead of actual student data. But until then,
          enjoy a screenshot I made a while back:
        </Typography>
        <ProjectImage src={studenttrackerScreenshotUrl} />
      </Box>
    </Stack>
  )
}
