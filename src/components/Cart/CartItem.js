import classes from './CartItem.module.css';

const CartItem = (props) => {
  // const { title, quantity, total, price } = props.item;
  const title = props.item.name;
  const quantity = props.item.quantity;
  const total = props.item.totalPrice;
  const price = props.item.price;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
