
import './Gifcard.css'

export const Gifcard = ( {img,titulo,Eliminargif} ) => {

    return (
        <>
        <div id='DP'>
        <div id='D'>
        <img id='imagen'src={img} alt="gif" />
        <h1 id='T'>{titulo}</h1>
        <button id='B' onClick={Eliminargif}>eliminar</button>
        </div>
        </div>


        </>
    )
}