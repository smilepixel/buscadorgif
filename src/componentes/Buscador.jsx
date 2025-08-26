import './Buscador.css'
import { useState } from 'react'
export const Buscador = ({setBUSQUEDA,agregarCATEGORIA}) => {

        const [Valortemporal, setValortemporal] = useState("");
        
        const manejarbusqueda = () => {
            if (Valortemporal.trim()){
                setBUSQUEDA(Valortemporal)
                agregarCATEGORIA(Valortemporal)
                setValortemporal('')
                console.log(Valortemporal)
            }  
        }
    return (
        <>
<input type="text"
placeholder='busca tu gif preferido'
value={Valortemporal}
onChange={(e) => setValortemporal(e.target.value)}
    onKeyDown={(e)=>{
        if(e.key === 'Enter') {manejarbusqueda()}
    }}
/>
        </>
    )
}

