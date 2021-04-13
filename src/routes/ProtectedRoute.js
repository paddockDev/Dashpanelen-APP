import { Route, Redirect } from 'react-router-dom'
import DashboardLayout from '../pages/Layouts/DashboardLayout'
import { decodeToken } from '../services/auth'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest} render={(props) =>
      decodeToken() ? (
        <DashboardLayout>
          <Component {...props}/>
        </DashboardLayout>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }/>
  )
}

export default ProtectedRoute
