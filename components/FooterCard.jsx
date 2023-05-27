import React from 'react'

import styles from '../styles'

const FooterCard = ({ title, href }) => {
  return ( 
    <div className={`${styles.interWidth} text-white grid grid-row-2 gap-y-3`}>
        <a href={href} >
            {title}
        </a>
    </div>
  )
}

export default FooterCard