import React from 'react';

import styles from './index.module.scss';

function CnvBtn ({onClick}) {
  return (
<button className={styles.button} 
  onClick={onClick}>
    Convert
  </button>
  )
}

export default CnvBtn;