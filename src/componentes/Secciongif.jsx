import { useState, useEffect } from 'react'
import './Secciongif.css'
import { Gifcard } from './Gifcard'
import { api } from '../api'

export const Secciongif = ({ BUSQUEDA, gifs, offset, accategoria, accoffset,Eliminarcategoria }) => {



    const Eliminargif = (id) => {
        const NuevoGif = gifs.filter(gif => gif.id !== id)
        accategoria(BUSQUEDA, NuevoGif) // <--- FALTABA BUSQUEDA que representa la categoria
        console.log(`${id} eliminado`)

    }


    const Mas = async () => {
        const nuevoOffset = offset + 6;
        accoffset(BUSQUEDA, nuevoOffset)
        const NuevoGif = await api(2, BUSQUEDA, nuevoOffset);
        accategoria(BUSQUEDA, [...gifs, ...NuevoGif]);
    }




    useEffect(() => {
        const Obtencion = async () => {
            accoffset(BUSQUEDA, 0)
            const resultado = await api(2, BUSQUEDA);
            accategoria(BUSQUEDA, resultado || []); // <--- AQUI TAMBIEN FALTABA BUSQUEDA
        };



        Obtencion();
    }, [BUSQUEDA])




    return (
        <>
            <div id='div'>
                <h2>resultados de busqueda {BUSQUEDA}</h2>
                <button id='Be' onClick={() => Eliminarcategoria(BUSQUEDA)}>eliminar categoria</button>
            </div>
            <div id='Div'>

                {gifs.map(gif => (<Gifcard
                    key={gif.id}
                    titulo={gif.title}
                    img={gif.url}
                    Eliminargif={() => Eliminargif(gif.id)}
                />))}

            </div>
<div id='diV'>
            <button id='BS' onClick={Mas}>buscar más</button>
</div>


        </>
    )
}