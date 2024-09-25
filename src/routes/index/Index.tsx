import { Stack } from "@mui/material"
import { Hero } from "./components/Hero"
import { CurrentRole } from "./components/CurrentRole"
import { Education } from "./components/Education"
import { Projects } from "./components/Projects"

export const Index = () => {
  return (
    <Stack spacing={2}>
      <Hero />
      <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
        spacing={2}
      >
        <CurrentRole />
        <Education />
      </Stack>
      <Projects />
    </Stack>
  )
}
