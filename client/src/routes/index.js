import configs from "../configs"
import { Home,Detail } from "../pages"
const PublicRoutes=[{
  path:configs.paths.home,
  element:<Home/>
},
{
    path:configs.paths.detail,
    element:<Detail/>
  }
]

const PrivateRoutes=[{}]


export {PublicRoutes,PrivateRoutes}