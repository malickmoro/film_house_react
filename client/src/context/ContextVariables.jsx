import { createContext, useState } from "react";

const ContextVariales = createContext({})

export const ContextVarialesProvider = ({children}) => {

    const [payment, setPayment] = useState('')
    const [selected, setSelected] = useState(false)

    return (
        <ContextVariales.Provider value={{ 
            payment, setPayment, selected, setSelected
            }} >
            {children}
        </ContextVariales.Provider>
    )
}

export default ContextVariales;