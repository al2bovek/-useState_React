import { useState } from "react"
import { p } from "./css/style";

export const Form = ({ div, input }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });
    const getValue = (e) => {
        const { name, value } = e.target;
        return setForm(form => ({ ...form, [name]: value }));
    }

    return (
        <div className={`${div}`}>
           
            <form className="flex flex-wrap gap-1 justify-center ">
                <input className={`${input} w-[30%]`} onInput={getValue} type="text" name="name" id="i_1" />
                <input className={`${input} w-[30%]`} onInput={getValue} type="email" name="email" id="i_2" />
                <input className={`${input} w-[30%]`} onInput={getValue} type="" name="password" id="i_3" />
            </form>
             <div className="text-left p-0.5 sm:p-1 md:p-2 lg:p-3">
                <p className={`${p} text-xl`}>{`Name: ${form.name}`}</p>
                <p className={`${p} text-xl`}>{`Email: ${form.email}`}</p>
                <p className={`${p} text-xl`}>{`Password: ${form.password}`}</p>
            </div>
        </div>
    )
}