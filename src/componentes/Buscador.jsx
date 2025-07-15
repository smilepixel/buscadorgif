import './Buscador.css'
import { Gifcard } from './Gifcard'
import { Secciongif } from './Secciongif'
export const Buscador = () => {

    return (

        <>
        
<input type="text"
placeholder='busca tu gif preferido'
/>
        <Gifcard></Gifcard>
        <Secciongif></Secciongif>
        </>
    )
}