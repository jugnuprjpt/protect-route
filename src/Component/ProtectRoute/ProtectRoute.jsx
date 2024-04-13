import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectRoute() {
  const isAuthenticated = localStorage.getItem("token");
  if (!isAuthenticated) return <Navigate to="/" replace />;
  return <Outlet />;
}

export default ProtectRoute
