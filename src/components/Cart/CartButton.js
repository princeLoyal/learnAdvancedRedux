import classes from './CartButton.module.css';
import { uiActions } from '../../store/index';
import { useDispatch } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartButtonHandler = () => {
    dispatch(uiActions.cartShow())
  };
  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
