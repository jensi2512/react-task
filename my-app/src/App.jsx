
import Task from "./component/Task"
import Form from "./component/Form"
import Navbar from "./component/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
function App() {

  return (
    <>
     <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/Task" element={<Task />} />
            <Route path="/Form" element={<Form/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
