import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>App</h1>
     <button className="btn btn-info">Info</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-error">Error</button>
    </>
  )
}

export default App