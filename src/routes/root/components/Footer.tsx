import { GitHub, LinkedIn } from "@mui/icons-material"
import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

export const Footer = () => {
  const year = new Date().getFullYear()
  const theme = useTheme()
  console.log(theme)
  return (
    <footer
      style={{ background: theme.palette.primary.main, marginTop: "auto" }}
    >
      <Container
        sx={{
          color: theme.palette.primary.contrastText,
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={2}
        >
          <Box sx={{ flex: 3 }}>
            <Typography variant="h6" sx={{ marginBottom: 1.5 }}>
              Thanks for stopping by my piece of the internet
            </Typography>
            <Typography>
              I hope you enjoyed your stay. If you have any questions or just
              want to chat, feel free to connect.
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ marginBottom: 1.5 }}>
              Site Content
            </Typography>
            <Stack>
              <FooterLink to="/">
                <Typography>Home Page</Typography>
              </FooterLink>
              <FooterLink to="/about">
                <Typography>About</Typography>
              </FooterLink>
              <FooterLink to="/projects">
                <Typography>Projects</Typography>
              </FooterLink>
            </Stack>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ marginBottom: 1.5 }}>
              Check These Out
            </Typography>
            <Stack>
              <FooterExternalLink href="https://ghostmail.dev">
                <Typography>ghostmail.dev</Typography>
              </FooterExternalLink>
              <FooterExternalLink href="https://chess.gilgen.me">
                <Typography>chess.gilgen.me</Typography>
              </FooterExternalLink>
            </Stack>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ marginBottom: 1.5 }}>
              Connect With Me
            </Typography>
            <Stack direction="row" spacing={2}>
              <FooterExternalLink href="https://github.com/jb-1980">
                <GitHub />
              </FooterExternalLink>
              <FooterExternalLink href="https://www.linkedin.com/in/josephgilgen/">
                <LinkedIn />
              </FooterExternalLink>
            </Stack>
          </Box>
        </Stack>
        <Typography
          component="div"
          variant="caption"
          textAlign="center"
          sx={{ flex: 1, marginTop: 2 }}
        >
          &copy; {year} Joseph Gilgen. All rights reserved.
        </Typography>
      </Container>
    </footer>
  )
}

const FooterExternalLink = (props: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
      color="inherit"
      sx={{
        "&:hover": {
          textDecoration: "underline",
        },
        textDecoration: "none",
      }}
    >
      {props.children}
    </Link>
  )
}

const FooterLink = (props: { to: string; children: React.ReactNode }) => {
  return (
    <Link
      component={RouterLink}
      to={props.to}
      color="inherit"
      sx={{
        "&:hover": {
          textDecoration: "underline",
        },
        textDecoration: "none",
      }}
    >
      {props.children}
    </Link>
  )
}
