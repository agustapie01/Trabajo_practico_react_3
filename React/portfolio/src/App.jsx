import Home from "./pages/Home"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Contact from "./componetes/Contact"




export const App = () => {


  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/componetes/Contact" element={<Contact/>} />
            
      </Routes>
    </BrowserRouter>

    
  )
}

export default App


