import React from 'react';
import styles from './css/Navbar.module.css'

const Navbar = () => {
  return <div className={styles.container}>
      <a href='#' className={styles.a}>Inicio</a>
      <a href='#' className={styles.a}>Ingresar</a>
      <a href='#' className={styles.a}>Lista</a>
  </div>;
};

export default Navbar;
