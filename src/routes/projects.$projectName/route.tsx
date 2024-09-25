import type { RouteConfigFunction } from "../../types"
import { ProjectDetails } from "./ProjectDetails"

export const ProjectDetailsRoute: RouteConfigFunction = (children) => ({
  path: ":projectName",
  element: <ProjectDetails />,
  children: [
    {
      path: "*",
      element: <div>404</div>,
    },
    ...(children ?? []),
  ],
  loader: () => {
    return null
  },
})
