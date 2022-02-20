import React, {useEffect, useState} from 'react'
import Barrita from './Barrita'
import style from './css/Home.module.css'

const Home = () => {
  const [ingresos, setIngresos] = useState(0);
  const [inputIngreso, setInputIngreso] = useState('');
  const [inputGasto, setInputGasto] = useState('');
  const [gastos, setGastos] = useState(0);
  const [resto, setResto] = useState('');

  useEffect(() => {
    setResto(parseInt(ingresos) - parseInt(gastos));
  })

  const submitIngreso = (e) => {
    e.preventDefault();
    setIngresos(inputIngreso);
    setInputIngreso('');
  }

  const submitGasto = (e) => {
    e.preventDefault();
    setGastos(parseInt(gastos)+ parseInt(inputGasto));
    setInputGasto('');
  }

  return (
      <div>
          <div className={style.container}>
              {/* amount va a venir del state */}
              <Barrita title={'Ingresos'} amount={ingresos} />
              <Barrita title={'Gastos'} amount={gastos} />
              <Barrita title={'Resto'} amount={resto} />
          </div>
          <form className={style.form}>
            <input className={style.input} type="number" placeholder='Ingreso' value={inputIngreso} onChange={(e) => setInputIngreso(e.target.value)}></input>
            <button type='submit' className={style.pinkBtn} onClick={(e) => submitIngreso(e)}>Ingresar</button>
          </form>
          <form className={style.form}>
            <input className={style.input} type="number" placeholder='Gasto' value={inputGasto} onChange={(e) => setInputGasto(e.target.value)}/>
            <button type='submit' className={style.pinkBtn} onClick={(e) => submitGasto(e)}>Ingresar</button>
          </form>
      </div>
  )
}

export default Home
