import { useState } from "react"
export const Counter = ({div, p}) => {
    const [number, setNumber] = useState(0)
    return (
        <div className={`${div} flex gap-x-3 text-2xl `}>
            <button onClick={() => setNumber(number => ++number)}>Increment</button>
            <p className={`${p}`}>{number}</p>
            <button onClick={() => setNumber(number => number - 1)}>Decrement</button>
        </div>
    )
}