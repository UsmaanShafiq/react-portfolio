import React from 'react'
import SiteLogo from '../../../assets/images/logo-blue.png';
import styles from "./Logo.module.css"

function Logo() {

  return (
    <div className={styles.site_logo} >
        <img src={SiteLogo} alt="site logo" />
    </div>
  )
}

export default Logo;