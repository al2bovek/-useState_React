import { useState } from "react"
// import { p } from "./style";
export const Field = ({ div, input, p }) => {
    const [value, setValue] = useState(' output');
    const getValue = (e) => {
        return setValue(e.target.value);
    }
    return (
        <div className={`${div} flex flex-col gap-4 text-2xl`}>
            <input
                className={`${input} text-[90%]`}
                type="text"
                placeholder="input"
                onInput={getValue} />
            <p className={`${p} text-amber-800`}>{value}</p>
        </div>
    )
}