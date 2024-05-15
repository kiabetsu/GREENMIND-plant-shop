import React from "react";
import styles from "./cart.module.scss";
// import "../../scss/components/_button.scss"

import { X, Plus, Minus } from "lucide-react";

function CartFlowerBlock({ name, image, pot, colorPot, price, care, hight }) {
  return (
    <div className={styles.CartFlowerBlock}>
      <div className={styles.Position}>
        <a href="">
          <div className={styles.Image}>
            <img
              src="https://tropichouse.ru/upload/iblock/d58/4thk96fdv6auuo0z5j9hmmvmfsrv6dls.jpg"
              alt="plant img"
            />
          </div>
          <div className={styles.Info}>
            <span className={styles.MainInfo}>Dracaena Lemon Lime</span>
            <br />
            <span className={styles.MiniInfo}>Easy care, 110 sm</span>
          </div>
        </a>
      </div>
      <div className={styles.Counters}>
        <div className={styles.PositionCounter}>
          <button>
            <Minus />
          </button>
          <span>2</span>
          <button>
            <Plus />
          </button>
        </div>
        <div className={styles.PriceCounter}>
          <span>177777.00 ₱</span>
        </div>
      </div>

    </div>
  );
}

export default CartFlowerBlock;
