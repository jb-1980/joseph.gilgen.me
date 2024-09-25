import { Outlet, useLocation } from "react-router-dom"
import "./styles.css"
import { Navbar } from "./components/Navbar"
import { Container, Stack } from "@mui/material"
import { Footer } from "./components/Footer"
import { useEffect } from "react"
import { match, P } from "ts-pattern"

export const Root = () => {
  const location = useLocation()
  const path = location.pathname
  const title = match(path)
    .with("/", () => "Home")
    .with("/my-story", () => "My Story")
    .with(
      P.when((p) => p.startsWith("/projects")),
      () => "Projects"
    )
    .otherwise(() => "Home")
  useEffect(() => {
    // change the title based on the path name
    document.title = title
  }, [title])
  return (
    <Stack sx={{ minHeight: "100vh" }} gap={2}>
      <Navbar />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </Stack>
  )
}
