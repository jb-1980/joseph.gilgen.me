import type { RouteConfigFunction } from "../../types"
import { Projects } from "./Projects"

export const ProjectsRoute: RouteConfigFunction = (children) => ({
  path: "projects",
  element: <Projects />,
  children: [
    {
      path: "*",
      element: <div>404</div>,
    },
    ...(children ?? []),
  ],
})
