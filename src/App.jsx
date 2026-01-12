import './App.css'
import { div, p, input } from './components/css/style'
import { Counter } from './components/Counter'
import { Toggle } from './components/Toggle'
import { Field } from './components/Field'
import { Hide } from './components/Hide'
import { Form } from './components/Form'
function App() {

  return (
    <div className={`flex flex-wrap-reverse  gap-x-4 gap-y-2 justify-center`}>
      <Counter
        div={div}
        p={p}
      />
      <Toggle
        div={div} 
        />
      <Field
        div={div}
        input={input} 
        />
        <Hide 
        div={div}
        p={p}
         />
         <Form 
         div={div}
         input={input}
         />
    </div>
  )
}

export default App
