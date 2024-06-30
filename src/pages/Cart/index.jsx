import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Trash2, ChevronLeft } from "lucide-react";

import styles from "./style.module.scss";
import CartFlowerBlock from "../../components/FlowerBlock/cartFlowerBlock";

function Cart() {
  return (
    <div className="content">
      <div className={styles.TopContent}>
        <div className={styles.CartLabel}>
          <span>
            <ShoppingCart size={18} strokeWidth={2} /> Cart
          </span>
        </div>
        <div className={styles.TrashCan}>
          <span>
            <Trash2 size={14} strokeWidth={2} /> empty trash
          </span>
        </div>
      </div>
      <div className={styles.MidContent}>
        <CartFlowerBlock />
      </div>
      <div className={styles.BotContent}>
        <div className={styles.LeftSide}>
          <div className={styles.PositionCounter}>
            <span>amount of products: 3 pcs.</span>
          </div>
          <div className={styles.BackButton}>
            <Link to="/products">
              <button>
                <ChevronLeft size={18} strokeWidth={2} /> go back
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.RightSide}>
          <div className={styles.PriceCounter}>
            <span>order amount: 1111111111.00 ₱</span>
          </div>
          <div className={styles.PayButton}>
            <button>pay order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
