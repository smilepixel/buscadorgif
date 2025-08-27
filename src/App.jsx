import './App.css'
import { useState } from 'react'
import { api } from './api.js'
import { Secciongif } from './componentes/Secciongif.jsx'
import { Buscador } from './componentes/Buscador.jsx'

function App() {
          const [BUSQUEDA, setBUSQUEDA] = useState("");
          const [CATEGORIA, setCATEGORIA] = useState({});
api()

const agregarCATEGORIA = (NBUSQUEDA) => {
if(NBUSQUEDA.trim() && !CATEGORIA[NBUSQUEDA]){
  setCATEGORIA(prev =>({
    ...prev,
    [NBUSQUEDA]:{
gifs: [],
offset: 0
    }
  }))
}
}
const ACgifcategoria = (CATEGORIA,nuevosgifs) => {
  setCATEGORIA(prev => ({
    ...prev ,[CATEGORIA]:{
      ...prev[CATEGORIA],
      gifs: nuevosgifs
    }
  }))
}

const actualizarOfssetCategoria = (CATEGORIA,NuevoOffset) => {
  setCATEGORIA(prev => ({
    ...prev ,[CATEGORIA]:{
      ...prev[CATEGORIA],
      offset: NuevoOffset
    }
  }))
}
  return (
    <>
    <Buscador
    setBUSQUEDA={setBUSQUEDA}
    agregarCATEGORIA={agregarCATEGORIA}
    />

{Object.keys(CATEGORIA).map(CATEGORIAs => (
  <Secciongif
  key={CATEGORIAs}
  BUSQUEDA={CATEGORIAs}
  gifs={CATEGORIA[CATEGORIAs].gifs}
  offset={CATEGORIA[CATEGORIAs].offset}
  accategoria = {ACgifcategoria}
  accoffset = {actualizarOfssetCategoria}
/>
))}

    </>
  )
}

export default App
