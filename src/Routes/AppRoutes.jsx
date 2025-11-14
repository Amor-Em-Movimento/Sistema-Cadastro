import { Routes,BrowserRouter, Route } from "react-router-dom";
import HomePage from '../pages/HomePage'

const AppRoutes = props => {
    <>
        <Routes>
            <Route path='/' element={<HomePage/>}/>

        </Routes>
    </>
}