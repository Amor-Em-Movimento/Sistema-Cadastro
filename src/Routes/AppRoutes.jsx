import { Routes,BrowserRouter, Route } from "react-router-dom";
import LoginPage from '../view/LoginPage'
import HomePage from '../view/HomePage'
import SearchPage from '../view/SearchPage'
import RegisterPage from '../view/RegisterPage'
import RelatoryPage from '../view/RelatoryPage'
import HelpPage from '../view/HelpPage'
import NotFoundPage from '../view/NotFoundPage'
import ProfilePage from '../view/ProfilePage'

const AppRoutes = () => (
    <>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/search' element={<SearchPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/relatory' element={<RelatoryPage/>}/>
            <Route path='/help' element={<HelpPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    </>
)

export default AppRoutes;