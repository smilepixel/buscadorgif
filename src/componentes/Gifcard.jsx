
import './Gifcard.css'

export const Gifcard = ( {img,titulo} ) => {

    return (
        <>
        <div id='DP'>
        <div id='D'>
        <img id='imagen' src={img} alt="gif" />
        <h1 id='T'>{titulo}</h1>
        <button id='B'>boton</button>
        </div>
        </div>


        </>
    )
}