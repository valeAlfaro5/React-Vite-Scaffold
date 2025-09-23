import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { Btn } from '../componentes/btn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <title>Probando botones con eventos</title>
      <p>Resultados se pueden ver con inspect</p>
      <Btn texto="Hola" color="red" fun={handleClick1}/>
      <Btn texto="Mundo" color="blue" fun={handleClick2}/>
      <Btn texto="!!!" color="green" fun={handleClick3} />
  </StrictMode>,
)

function handleClick1() {
  console.log('Mensaje 1: Hola!!!');
}

function handleClick2() {
  console.log('Mensaje 2: Probando el segundo boton!!!');
}

function handleClick3() {
  console.log('Ultima!!!');
}

// export default function main() {
//   return (
//     <div className="bg-white">
//       <Btn texto="Hola" color="red" />
//       <Btn texto="Mundo" color="blue" />
//       <Btn texto="!!!" color="green" />
//     </div>
//   )
// }
