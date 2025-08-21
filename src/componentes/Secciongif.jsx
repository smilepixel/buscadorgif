import { useState,useEffect } from 'react'
import './Secciongif.css'
import { Gifcard } from './Gifcard'
import { api } from '../api'

export const Secciongif = ({BUSQUEDA}) => {

const [offset,setOffset] = useState(0);
    const [gif, setGif] = useState([]);

    const Eliminargif = (id) => {
const NuevoGif = gif.filter(gif => gif.id !== id)
setGif(NuevoGif)
console.log(`${id} eliminado`)

    }


            const Mas = async () => {
        const nuevoOffset = offset + 6;
        const NuevoGif = await api(2, BUSQUEDA, nuevoOffset);
        setGif([...gif, ...NuevoGif]);
        setOffset(nuevoOffset);
    }


    useEffect(() => {
        const Obtencion = async () => {
            const resultado = await api(2,BUSQUEDA);
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

<button id='BS' onClick={Mas}>buscar más</button>
        
        </>
    )
}