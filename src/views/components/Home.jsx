import React from 'react';
import Barrita from './Barrita';
import style from './css/Home.module.css'

const Home = () => {
  return <div>
    {/* amount va a venir del state */}
    <Barrita title={'Ingresos'} amount={'$100'}/>
    <Barrita title={'Gastos'} amount={'$90'}/>
    <Barrita title={'Resto'} amount={'$10'}/>
  </div>
};

export default Home;
