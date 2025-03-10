import { useState } from 'react'
import Task from './assets/component/Task'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [text, settext] = useState (false)

  return (
    <>
      <div className="card1">
        <p>Click Here </p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <hr />
      <div className='btn'style={{textAlign : "justify"}}>
        {text && <p className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Voluptas distinctio dolorum, dolorem blanditiis voluptate ut <br />praesentium officia ex consequuntur? Tempore!</p>}

        <button style={{margin : "20px"}} onClick={() => settext(true)}>
          ON
        </button>
        <button onClick={() => settext(false)}>
          OFF
        </button>
    </div>  
    </>
  )
}

export default App
