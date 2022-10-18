import React from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import styles from './swap.module.scss';
import { ReactComponent as SwapLogo } from '../../assets/img/swap.svg';

function Swap ({onClick}) {
  const [rotate, setRotate] = useState(false);

  return (
    <button className={clsx(styles.btn, rotate && styles.btn_rotate)}>
      <SwapLogo onClick={() => {
        onClick();
        setRotate(!rotate)}} />
    </button>
  );
};

export default Swap;


