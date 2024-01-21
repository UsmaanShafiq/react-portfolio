import React from 'react'

import styles from "./Logo.module.css"
import { Link } from 'react-router-dom';

function Logo({SiteLogo}) {

  return (
    <div className={styles.site_logo} >
        <Link to='/'><img src={SiteLogo} alt="site logo" /></Link>
    </div>
  )
}

export default Logo;