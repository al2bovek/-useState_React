import { useState } from "react"

export const Toggle = ({div}) => {
    const [status, setStatus] = useState(true)
    return (
        <div className={`${div} ${status ? `bg-amber-300` : `bg-amber-950`}`}>
            <button className={`text-4xl ${status ? `text-amber-950` : `text-amber-100`}`} onClick={() => setStatus(status => !status)}>{status ? 'OFF' : 'ON'
            }</button>
        </div>
    )
}