import './App.css'
import Navigation from './Components/Layouts/Navigation/index.jsx'
import Content from './Components/Layouts/Content/Content.jsx'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation/>
        <Content/>
      </BrowserRouter>
      
    </>
  )
}

export default App
