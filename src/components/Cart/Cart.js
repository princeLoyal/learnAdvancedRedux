import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { cartActions } from '../../store/cartSlice';

const Cart = (props) => {
const dispatch = useDispatch();
useEffect(() => {
dispatch(cartActions.getItemsFromDatabase({
items: [{
id: 'p2',
name: 'A good book',
price: 45.6,
totalPrice: 34,
quantity: 5
}],
totalQuantity: 8
}))
}, []);
  const cartItems = useSelector(state => state.cart);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        { cartItems.items.map(item => 
        <CartItem
         key = {item.id}
         item={{ 
          id:item.id,
          title: item.name, 
          quantity: item.quantity, 
          total: item.totalPrice, 
          price: item.price 
        }}
        />
          ) }
      </ul>
    </Card>
  );
};

export default Cart;
