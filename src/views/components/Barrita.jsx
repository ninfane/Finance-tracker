import React from 'react';
import style from './css/Barrita.module.css'

const Barrita = ({title, amount}) => {
  return <div className={style.ingresos}>
          <span>{title}</span>
          <span>{amount}</span>
      </div>
};

export default Barrita;

