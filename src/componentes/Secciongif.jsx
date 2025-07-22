import { useState,useEffect } from 'react'
import './Secciongif.css'
import { Gifcard } from './Gifcard'
import { api } from '../api'

export const Secciongif = () => {



    const [gif, setGif] = useState([]);
    useEffect(() => {
        const Obtencion = async () => {
            const resultado = await api(3, "gatos");
            setGif(resultado || []);
        };

        Obtencion();
    },[])




    return (
        <>
        <div id='Div'>
            {   gif.map(gif => (<Gifcard
            key={gif.id}
            titulo={gif.title}
            img={gif.url}
            />))}
        </div>
        </>
    )
}