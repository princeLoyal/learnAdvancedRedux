import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart);
  console.log(cartItems)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        { cartItems.items.map(item => 
        <CartItem
         key = {item.id}
         item={item}
          // item={{ title: item.name, quantity: cartItems.totalQuantity, total: item.totalPrice, price: item.price }}
        />
          ) }
      </ul>
    </Card>
  );
};

export default Cart;
