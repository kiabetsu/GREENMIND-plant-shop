import React from "react";
import styles from './style.module.scss';
import CartFlowerBlock from "../../components/FlowerBlock/cartFlowerBlock";
import { ShoppingCart, Trash2 } from 'lucide-react';

function Cart() {
    return(
    <div class="content">
        <div className={styles.TopContent}>
            <div className={styles.CartLabel}>
                <span><ShoppingCart size={18} strokeWidth={2} /> Cart</span>
            </div>
            <div className={styles.TrashCan}>
                <span><Trash2 size={14} strokeWidth={2}/> empty trash</span>
            </div>
        </div>
        <div className={styles.BotContent}>
            <CartFlowerBlock />
        </div>
    </div>
    )
}

export default Cart;