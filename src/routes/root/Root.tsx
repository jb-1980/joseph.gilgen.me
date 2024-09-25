import { Outlet } from "react-router-dom"
import "./styles.css"
import { Navbar } from "./components/Navbar"
import { Container, Stack } from "@mui/material"
import { Footer } from "./components/Footer"

export const Root = () => {
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
