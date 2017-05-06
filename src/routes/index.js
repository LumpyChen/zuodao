import subject from './Subject'
import course from './Course'
import coursePlay from './Course/play'
import social from './Social'
// import social from './Social'
// import personal from './Personal'
// import pageNotFound from './pageNotFound'
import CoreLayout from '../layout'

export const createRoutes = () => (
  [
    {
      component: CoreLayout,
      routes: [
        {
          path: '/',
          exact: true,
          component: subject,
        },
        {
          path: '/course',
          exact: true,
          component: course,
        },
        {
          path: '/social',
          exact: true,
          component: social,
        },
        {
          path: '/play',
          exact: true,
          component: coursePlay,
        },
      ],
    },
  ]
)

export default createRoutes
