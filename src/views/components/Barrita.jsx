import React from 'react';
import style from './css/Barrita.module.css'

const Barrita = ({title, amount}) => {
    console.log(title);
    console.log(amount);
  return <div className={style.container}>
      <div className={style.ingresos}>
          <span>{title}</span>
          <span>{amount}</span>
      </div>
  </div>;
};

export default Barrita;

