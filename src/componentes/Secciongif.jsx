import { useState,useEffect } from 'react'
import './Secciongif.css'
import { Gifcard } from './Gifcard'
import { api } from '../api'

export const Secciongif = ({BUSQUEDA}) => {



    const [gif, setGif] = useState([]);

    const Eliminargif = (id) => {

const NuevoGif = gif.filter(gif => gif.id !== id)
setGif(NuevoGif)
console.log(`${id} eliminado`)

    }


    useEffect(() => {
        const Obtencion = async () => {
            const resultado = await api(20,BUSQUEDA);
            setGif(resultado || []);
        };

        Obtencion();
    },[BUSQUEDA])




    return (
        <>
        <div id='Div'>
            {   gif.map(gif => (<Gifcard
            key={gif.id}
            titulo={gif.title}
            img={gif.url}
            Eliminargif={() => Eliminargif(gif.id)}
            />))}
        </div>

<button id='BS'>buscar más</button>
        
        </>
    )
}