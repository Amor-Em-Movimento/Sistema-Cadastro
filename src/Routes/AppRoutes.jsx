import { Routes,BrowserRouter, Route } from "react-router-dom";
import HomePage from '../view/HomePage'
import SearchPage from '../view/SearchPage'
import RegisterPage from '../view/RegisterPage'
import RelatoryPage from '../view/RelatoryPage'
import HelpPage from '../view/HelpPage'
import NotFoundPage from '../view/NotFoundPage'

const AppRoutes = () => (
    <>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/search' element={<SearchPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/relatory' element={<RelatoryPage/>}/>
            <Route path='/help' element={<HelpPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    </>
)

export default AppRoutes;