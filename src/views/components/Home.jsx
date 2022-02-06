import React, {useState} from 'react'
import Barrita from './Barrita'
import style from './css/Home.module.css'

const Home = () => {
  const [ingresos, setIngresos] = useState(0);
  const [gastos, setGastos] = useState(0);
  const [resto, setResto] = useState(ingresos-gastos);

  return (
      <div>
          <div className={style.container}>
              {/* amount va a venir del state */}
              <Barrita title={'Ingresos'} amount={ingresos} />
              <Barrita title={'Gastos'} amount={gastos} />
              <Barrita title={'Resto'} amount={resto} />
          </div>
          <form className={style.form}>
            <input className={style.input} type="text" placeholder='Ingreso total'/>
            <button type='submit' className={style.pinkBtn}>Ingresar</button>
          </form>
          <form className={style.form}>
            <input className={style.input} type="text" placeholder='concepto'/>
            <input className={style.input} type="number" placeholder='monto con decimales'/>
            <button type='submit' className={style.pinkBtn}>Ingresar</button>
          </form>
      </div>
  )
}

export default Home
