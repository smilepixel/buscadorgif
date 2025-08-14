import './Buscador.css'
import { useState } from 'react'
export const Buscador = ({setBUSQUEDA}) => {

        const [Valortemporal, setValortemporal] = useState("");
        
    return (
        <>
<input type="text"
placeholder='busca tu gif preferido'
value={Valortemporal}
onChange={(e) => setValortemporal(e.target.value)}
    onKeyDown={(e)=>{
        if(e.key === 'Enter' && Valortemporal.trim() !== '') {setBUSQUEDA(Valortemporal)}
    }}
/>
        </>
    )
}

