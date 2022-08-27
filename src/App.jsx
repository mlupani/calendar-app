import { useState, useEffect } from 'react'
import './App.css'

const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

function App () {
  const [searchYear, setSearchYear] = useState(new Date().getFullYear())
  const [searchMonth, setSearchMonth] = useState(7)

  useEffect(() => {
    changeYear()
  }, [searchYear])

  useEffect(() => {
    changeMonth()
  }, [searchMonth])

  const changeYear = () => {
    if (searchYear.length === 4) {
      // TODO: buscar calendario del año buscado
    }
  }

  const changeMonth = () => {
    // TODO: cuando cambia el mes buscar eventos con el cambio de mes
  }

  return (
    <div id="root">
      <header id="header">
        <button>Hoy</button>
        <button>Ant.</button>
        <button>Sig.</button>
        <select id="select_months" onChange={(e) => setSearchMonth(e.target.value)} >
          {
            MONTHS.map((month, key) => <option key={key} selected={key === searchMonth && true } value={key} >{month}</option>)
          }
        </select>
        <input type="number" maxLength={4} value={searchYear} onChange={(e) => setSearchYear(e.target.value) } placeholder='Año' id="search_year" />
      </header>
    </div>
  )
}

export default App
