import type { RouteConfigFunction } from "../../types"
import { MyStory } from "./MyStory"

export const MyStoryRoute: RouteConfigFunction = (children) => ({
  path: "my-story",
  element: <MyStory />,
  children: [
    {
      path: "*",
      element: <div>404</div>,
    },
    ...(children ?? []),
  ],
})
