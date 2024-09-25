import { Button, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const Hero = () => {
  return (
    <Stack
      sx={{
        bgcolor: "primary.light",
        padding: 2,
        borderRadius: 2,
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4">Hi, I am Joseph!</Typography>
      <Typography>Software Engineer • Problem Solver • Loves Chess</Typography>
      <Stack direction="row" spacing={2}>
        <Button
          color="secondary"
          variant="contained"
          component={Link}
          to="/about"
        >
          About
        </Button>
        <Button
          color="secondary"
          variant="contained"
          component={Link}
          to="/projects"
        >
          Projects
        </Button>
      </Stack>
    </Stack>
  )
}
