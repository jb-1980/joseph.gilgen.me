import React from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { RootRoute } from "./routes/root/route"
import { IndexRoute } from "./routes/index/route"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "@fontsource/righteous/400.css"
// import { LoginRoute } from "./routes/login/route"
// import { SignupRoute } from "./routes/signup/route"
// import { GamesIdRoute } from "./routes/_games.$gameId/route"
// import { LogoutRoute } from "./routes/logout/route"
import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material"
import { ProjectsRoute } from "./routes/projects/route"
import { ProjectDetailsRoute } from "./routes/projects.$projectName/route"
// import { GamesRoute } from "./routes/games/route"
// import { QueryClientProvier } from "./lib/react-query"
// import { GameReviewRoute } from "./routes/_games._$gameId.review/route"

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
  RootRoute([IndexRoute(), ProjectsRoute([ProjectDetailsRoute()])]),
])

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
