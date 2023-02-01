import classes from './CartButton.module.css';
import { uiActions } from '../../store/index';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch();
  const cartButtonHandler = () => {
    dispatch(uiActions.cartShow())
  };
  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
