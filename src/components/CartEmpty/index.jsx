import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/img/empty-cart.png";
import styles from "./CartEmpty.module.scss";

const CartEmpty = () => {
  return (
    <div>
      <div class={`container ${styles.container}`}>
        <div class={styles.empty}>
          <h2>
            Корзина пустая <icon>😕</icon>
          </h2>
          <p>
            Вы еще не выбрали ни одного товара.
            <br />
            Для того, чтобы выбрать пиццу, перейдите на главную страницу.
          </p>
          <img src={image} alt="Empty cart" />
          <Link to="/" class="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
