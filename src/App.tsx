import './styles/App.css'
// import { Toaster } from 'react-hot-toast'
import React from 'react'
import { Routes, Route } from "react-router-dom";
import AuthLayout from './layouts/AuthLayout'
import MainLayout from './layouts/MainLayout'
import NotFound from './pages/NotFound'
import { Toaster } from './components/ui/toaster';
import { Login } from './pages/Login';
import Loading from './components/custom/Loading';
import { ThemeProvider } from './context/themeProvider';
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Cases = React.lazy(() => import("./pages/Cases"));
const CreateProduct = React.lazy(() => import("./pages//CreateProduct"));

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster />
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route
            path="login"
            element={
              <React.Suspense fallback={<Loading />}>
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
              <React.Suspense fallback={<Loading />}>
                <Dashboard />
              </React.Suspense>
            }
          />
          <Route
            path="cases/*"
            element={
              <React.Suspense fallback={<Loading />}>
                <Cases />
              </React.Suspense>
            }
          />
          <Route
            path="create-product/*"
            element={
              <React.Suspense fallback={<Loading />}>
                <CreateProduct />
              </React.Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </ThemeProvider>
  )
}

export default App