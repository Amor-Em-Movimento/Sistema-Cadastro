import './App.css'
import Navigation from './Components/Layouts/Navigation/index.jsx'
import Content from './Components/Layouts/Content/Content.jsx'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className= 'container'>
          <Navigation/>
          <Content/>
        </div>
      </BrowserRouter>
      
    </>
  )
}

export default App
