import { useState } from "react"
import { Counter } from "./Counter"
export const Counters = ({ div, p}) => {
const [values, setValues] = useState([0,0]);
const resetAll = () => { setValues([0,0]) };
    return (
        <div className={`${div} ${p} flex flex-col gap-2 justify-around
         [&>div]:border [&>div]:rounded-2xl [&>div]:text-sm [&>div]:px-0.5`}>
            <Counter
                p={p} />
            <Counter
                p={p}
            />
            {/* <button onClick={resetAll}>Reset All</button> */}
        </div>
    )
}