
import Task from "./component/Task"
import Form from "./component/Form"
import Navbar from "./component/Navbar"
import Form2 from "./component/Form2"
import App2 from "./component/App2"
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
            <Route path="/App2" element={<App2/>} />
            <Route path="/Form2" element={<Form2/>} />

          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
