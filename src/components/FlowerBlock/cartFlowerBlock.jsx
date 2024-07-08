import React from 'react';
import styles from './cart.module.scss';
// import "../../scss/components/_button.scss"

import { X, Plus, Minus } from 'lucide-react';

function CartFlowerBlock({
  name,
  image,
  pot,
  colorPot,
  price,
  care,
  hight,
  count,
}) {
  const careType = ['easy', 'medium', 'hard'];
  return (
    <div className={styles.CartFlowerBlock}>
      <div className={styles.Position}>
        <a href="">
          <div className={styles.Image}>
            <img src={image} alt="plant img" />
          </div>
          <div className={styles.Info}>
            <span className={styles.MainInfo}>{name}</span>
            <br />
            <span className={styles.MiniInfo}>
              {careType[care]} care, {hight} sm
            </span>
          </div>
        </a>
      </div>
      <div className={styles.Counters}>
        <div className={styles.PositionCounter}>
          <button>
            <Minus />
          </button>
          <span>{count}</span>
          <button>
            <Plus />
          </button>
        </div>
        <div className={styles.PriceCounter}>
          <span>{price}.00 ₱</span>
        </div>
      </div>
    </div>
  );
}

export default CartFlowerBlock;
