import './App.css'
import { div, p } from './components/css/style'
import { Counter } from './components/Counter'
import { Toggle } from './components/Toggle'
function App() {

  return (
    <div className={`flex flex-wrap gap-x-4 justify-center`}>
    <Counter 
    div={div}
    p={p}
    />
    <Toggle 
    div={div}
    />
    </div>
  )
}

export default App
