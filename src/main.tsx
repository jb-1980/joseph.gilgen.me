import React from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { RootRoute } from "./routes/root/route"
import { IndexRoute } from "./routes/index/route"
import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material"
import { ProjectsRoute } from "./routes/projects/route"
import { ProjectDetailsRoute } from "./routes/projects.$projectName/route"
import { MyStoryRoute } from "./routes/my-story/route"
// Supports weights 100-900
import "@fontsource-variable/inter/opsz-italic.css"
import "@fontsource/righteous"

const theme = createTheme({
  palette: {
    primary: {
      main: "#30adcb",
    },
    secondary: {
      main: "#f20d28",
    },
    background: {
      default: "#fafaf5",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
})

const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("No root element found")
}

const router = createBrowserRouter([
  RootRoute([
    IndexRoute(),
    ProjectsRoute([ProjectDetailsRoute()]),
    MyStoryRoute(),
  ]),
])

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
