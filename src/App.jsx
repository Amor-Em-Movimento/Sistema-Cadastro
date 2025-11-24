import './App.css'
import Navigation from './Components/Layouts/Navigation/index.jsx'
import Content from './Components/Layouts/Content/Content.jsx'
import LoginPage from './view/LoginPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from './Routes/PrivateRoute.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'
import { DataProvider } from './Context/DataContext.jsx'

const MainLayout = () => (
  <div className='container'>
    <Navigation/>
    <Content/>
  </div>
);

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <DataProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route element={<PrivateRoute />}>
                <Route path="/*" element={<MainLayout />} />
              </Route>
            </Routes>
          </DataProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App