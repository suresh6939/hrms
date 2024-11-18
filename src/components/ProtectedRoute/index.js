import {Navigate, Outlet} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')
  if (token === undefined || Cookies.get('username')=== undefined) {
    return <Navigate to="/login" replace/>
  }
  return <Outlet/>
}

export default ProtectedRoute