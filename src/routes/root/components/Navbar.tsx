import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { NavLink } from "react-router-dom"
import GitHubIcon from "@mui/icons-material/GitHub"
export function Navbar() {
  return (
    <Box>
      <Toolbar id="navbar">
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          sx={{
            flexGrow: 1,
            fontFamily: "righteous",
            fontSize: 32,
            textDecoration: "none",
          }}
          color="primary"
        >
          JBG
        </Typography>
        <Button
          component={NavLink}
          to="/my-story"
          sx={(theme) => ({
            "&.active": {
              color: "primary.main",
              borderRadius: 0,
              borderBottom: `2px solid ${theme.palette.secondary.main}`,
            },
            "&:hover": {
              color: "secondary.main",
            },
          })}
          style={{ padding: "0 8px" }}
          color="inherit"
        >
          My Story
        </Button>
        <Button
          component={NavLink}
          to="/projects"
          sx={(theme) => ({
            "&.active": {
              color: "primary.main",
              borderRadius: 0,
              borderBottom: `2px solid ${theme.palette.secondary.main}`,
            },
            "&:hover": {
              color: "secondary.main",
            },
          })}
          style={{ padding: "0 8px" }}
          color="inherit"
        >
          Projects
        </Button>
        <Button
          component="a"
          href="https://github.com/jb-1980?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <GitHubIcon color="primary" />
        </Button>
      </Toolbar>
    </Box>
  )
}
