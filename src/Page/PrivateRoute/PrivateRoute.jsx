import React, { useContext } from 'react';
import { AuthContext } from '../../Component/ContextApi/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Component/Loading';

const PrivateRoute = ({ children }) => {
   const location = useLocation()

   const { user, userLoding } = useContext(AuthContext)

   if (userLoding) {
      return <Loading></Loading>
   }
   if (user) {
      return children
   }

   return <Navigate to='/signup' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;