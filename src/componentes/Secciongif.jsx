import { useState,useEffect } from 'react'
import './Secciongif.css'
import { Gifcard } from './Gifcard'
import { api } from '../api'

export const Secciongif = ({BUSQUEDA,gifs,offset,accategoria,accoffset}) => {



    const Eliminargif = (id) => {
const NuevoGif = gifs.filter(gif => gif.id !== id)
accategoria(NuevoGif)
console.log(`${id} eliminado`)

    }


            const Mas = async () => {
        const nuevoOffset = offset + 6;
        accoffset(BUSQUEDA,nuevoOffset)
        const NuevoGif = await api(2, BUSQUEDA, nuevoOffset);
        accategoria(BUSQUEDA,[...gifs, ...NuevoGif]);
    }




    useEffect(() => {
        const Obtencion = async () => {
            accoffset(BUSQUEDA,0)
            const resultado = await api(2,BUSQUEDA);
            accategoria(resultado || []);
        };



        Obtencion();
    },[BUSQUEDA])




    return (
        <>
        <div id='Div'>
            <h2>resultados de busqueda {BUSQUEDA}</h2>
            {   gifs.map(gif => (<Gifcard
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