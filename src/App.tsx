import './styles/App.css'
// import { Toaster } from 'react-hot-toast'
import React from 'react'
import { Routes, Route } from "react-router-dom";
import AuthLayout from './layouts/AuthLayout'
import MainLayout from './layouts/MainLayout'
import NotFound from './pages/NotFound'
import { Toaster } from './components/ui/toaster';
import { Login } from './pages/Login';
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route
            path="login"
            element={
              <React.Suspense fallback={<>...</>}>
                <Login />
              </React.Suspense>
            }
          />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route
            path="dashboard/*"
            element={
              <React.Suspense fallback={<>...</>}>
                <Dashboard />
              </React.Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App