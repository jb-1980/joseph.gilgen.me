import { Index } from './Index'
import { RouteConfigFunction } from '../../types'

export const IndexRoute: RouteConfigFunction = (childRoutes) => {
  return {
    path: '/',
    element: <Index />,
    children: [...(childRoutes ?? [])],
  }
}
