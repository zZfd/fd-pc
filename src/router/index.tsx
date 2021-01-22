
import Home from '../pages/Home/home'
import Login from '../pages/Login/login'
import Layout from '../Layout/layout'
import React, { PureComponent } from 'react'

interface IRoute {
  path: string,
  redirect?: string,
  children?: Array<IRoute>,
  layout?: any,
  component?: any,
  auth?: Boolean,
  roles?: Array<string>
}

// 常规路由
const constantRoutes:Array<IRoute> = [
  {
    path: '/login',
    component: Login
  },
  { path: '/',
    layout: Layout,
    component: Home,
    auth: true
  }
]

// 角色路由
const asyncRoutes:Array<IRoute> = [

]

// export function getAsyncRoutes(routes:Array<IRoute>) {
//   let availableRoutes:Array<object> = []
//   const renderRoutes = (routes:Array<IRoute>, parentPath:string) => {
//     routes.forEach(route => {
//       const { path, component, layout, children, redirect, auth } = route
//       if(auth === true) {
//         <Route key={`${parentPath}${path}}`} path={route.path} exact render={props =>
//                           (!route.auth ? (<route.component {...props} />) : (token ? <item.component {...props} /> : <Redirect to={{
//                              pathname: '/login',
//                              state: { from: props.location }
//                          }} />)
//                        )} />
//       }
//
//       if(redirect) {
//         availableRoutes.push(
//           <Redirect key={`${parentPath}${path}}`} from={path} to={`${parentPath}${redirect}}`} />
//         )
//       }else {
//         availableRoutes.push(
//           layout ? <Route key={`${parentPath}${path}}`} exact path={`${parentPath}${path}}`}
//                           render={() => React.createElement(layout, null, React.createElement(component,null))} />
//                           : <Route key={`${parentPath}${path}}`} exact path={`${parentPath}${path}}`} component={component} />
//         )
//       }
//       if(Array.isArray(children) && children.length > 0) {
//         renderRoutes(children, path)
//       }
//     })
//   }
//   renderRoutes(routes, '')
//
//   return availableRoutes
// }


// export class AsyncRoute extends React.Component{
//   render() {
//     let token = this.props.token
//     return (
//       <Router>
//         <Switch>
//           {getAsyncRoutes(routerConfig)}
//         </Switch>
//       </Router>
//     );
//   }
// }