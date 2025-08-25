import { useState,useEffect } from 'react'
import './Secciongif.css'
import { Gifcard } from './Gifcard'
import { api } from '../api'

export const Secciongif = ({BUSQUEDA}) => {

const [offset,setOffset] = useState(0);
    const [gif, setGif] = useState([]);
        const [gif2, setGif2] = useState([]);


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

const URLC = (url) => {
const URLC2 = gif2.filter(gif2 => gif2.url == url)
setGif2(URLC2)
console.log(`${url} añadida`)
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
            url={() => URLC(gif.url)}
            Eliminargif={() => Eliminargif(gif.id)}
            />))}

                        {   gif2.map(gif2 => (<Gifcard
            url={() => URLC(gif2.url)}
            />))}
        </div>

<button id='BS' onClick={Mas}>buscar más</button>
        
        </>
    )
}