import { useState } from "react"
 export const Hide = ({div, p}) => {
    const [hide, setHide] = useState(true);
    const show = () => {
      return setHide(pr => !pr);
    }
   return (
    <div className={`${div}`}>
        <div className="flex justify-center">
        <p className={`${p}`}>{hide ? 'Content is hidden' : 'Hi there'}</p>
        </div>
        <button onClick={() => show()}>{hide ? 'Show' : 'Hide'}</button>
    </div>
   )
 }