import React from 'react'
import SiteLogo from '../../../assets/images/logo-blue.png';
import styles from "./Logo.module.css"
import { Link } from 'react-router-dom';

function Logo() {

  return (
    <div className={styles.site_logo} >
        <Link to='/'><img src={SiteLogo} alt="site logo" /></Link>
    </div>
  )
}

export default Logo;