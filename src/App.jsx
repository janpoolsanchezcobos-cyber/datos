import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Saludo from './Components/Saludo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Saludo />
      <h1>Mis Datos personales</h1>
      <p>Jean Paul sanchez cobos</p>
      <section>
        <h2>Diseño y Programacion Web</h2>
        <p>Estudiante del Instituto Superior Trujillo</p>
      </section>
    </main>
  )
}

export default App