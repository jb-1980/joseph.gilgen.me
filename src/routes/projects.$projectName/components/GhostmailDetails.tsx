import { projects } from "../../../data/projects.ts"
import { Box, Divider, Link, Stack, Typography, useTheme } from "@mui/material"
import { ProjectImage } from "./project-image.tsx"

export const GhostmailDetails = () => {
  const ghostmail = projects.find((project) => project.id === "ghostmail")!
  const theme = useTheme()
  return (
    <Stack
      sx={{
        gap: 2,
      }}
    >
      <ProjectImage src={ghostmail.imgSrc} />
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {ghostmail.title}
      </Typography>
      <Divider sx={{ border: 2, borderColor: "primary.main" }} />
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          What is Ghostmail?
        </Typography>
        <Typography variant="body1">
          As a developer I found a need to have an smtp server that I could
          <ul>
            <li>
              Send emails to any email without it actually going to that inbox.
            </li>
            <li>
              View the emails that were sent from my development environment to
              get the confidence that they will render correctly in the inbox.
            </li>
          </ul>
          This project is a simple email capturing service for your dev
          environment. You can create a unique email account, and get the SMTP
          server string that will capture all emails and drop it in the same
          inbox.
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Technologies Used
        </Typography>
        <Typography>This project uses the following technologies:</Typography>
        <ul>
          <li>
            <Typography>
              <Link
                href="https://nodemailer.com/extras/smtp-server/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Node mailer's SMTP server.
              </Link>{" "}
              to capture the emails. This is a simple SMTP server running on
              Node.
            </Typography>
          </li>
          <li>
            <Typography>
              <Link
                href="https://remix.run/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Remix
              </Link>{" "}
              for the client.
            </Typography>
          </li>
          <li>
            <Typography>
              <Link
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MongoDB
              </Link>{" "}
              for storing the emails.
            </Typography>
          </li>
        </ul>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where can I see the code?
        </Typography>
        <Typography
          component={Link}
          href="https://github.com/ghostmail-dev/ghostmail"
          target="_blank"
          rel="noopener noreferrer"
        >
          ghostmail.dev on GitHub
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Where is a demo?
        </Typography>
        <Typography>
          You can visit{" "}
          <Link href="https://demo.ghostmail.dev">demo.ghostmail.dev</Link> to
          see the project in action. The demo server will reset every 20
          minutes. But during that time you can create an account with the API
          key{" "}
          <code style={{ color: theme.palette.secondary.main }}>
            ghostmail-demo
          </code>{" "}
          and send emails to your unique email address.
        </Typography>
      </Box>
    </Stack>
  )
}
