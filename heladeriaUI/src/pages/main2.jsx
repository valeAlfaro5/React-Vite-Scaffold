import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { Btn } from '../componentes/btn.jsx'
import { Input } from '../componentes/input.jsx'

function Helados() {
  const [data, setData] = useState([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [sku, setSku] = useState("");
  const [sirve, setSirve] = useState("");

    const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:3000/nuevo-helado", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, precio, sku, sirve })
      });

      const nuevo = await res.json();
      console.log("Creado:", nuevo);
      setData([...data, nuevo]); // actualizar lista
      setNombre(""); setPrecio(""); setSku(""); setSirve(""); // limpiar inputs
    } catch (err) {
      console.error("Error al crear helado:", err);
    }
  };

  const handleGet = async () => {
    try {
      const res = await fetch("http://localhost:3000/helados");
      const helados = await res.json();
      setData(helados);
      console.log("📦 Datos obtenidos:", helados);
    } catch (err) {
      console.error("❌ Error al obtener helados:", err);
    }
  };
  

  function handleClick1() {
    console.log('Mensaje 1: Hola!!!');
  }
  function handleClick2() { 
    console.log('Mensaje 1: Hola!!!');
  }
  function handleClick3() {
    console.log('Mensaje 1: Hola!!!');
  }

  return (
    <div>
      <h2>Ingresar Helados:</h2>
      <Input texto="Ingrese nombre" onChange={e => setNombre(e.target.value)} /><br />
      <Input texto="Ingrese precio" type ="number" onChange={e => setPrecio(e.target.value)}  /><br />
      <Input texto="Ingrese SKU" type ="number" onChange={e => setSku(e.target.value)} /><br />
      <select 
        value={sirve} 
        onChange={e => setSirve(e.target.value)} 
        className="border rounded-md px-2 py-1 m-1"
      >
        <option value="">Seleccione...</option>
        <option value="vaso">Vaso</option>
        <option value="galleta">Galleta Waffle</option>
      </select>
      <br />


      <Btn texto="Ingresar" color="red" fun={handleSubmit} />
      <Btn texto="Get Helados" color="cyan" fun={handleGet} />

      <h2>Get Helados:</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            {item.nombre} - ${item.precio} - ({item.sku})- ({item.sirve})
          </li>
        ))}
      </ul>
    </div>
  );
}

// Renderizar el componente en #root
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Helados />
  </StrictMode>
);
