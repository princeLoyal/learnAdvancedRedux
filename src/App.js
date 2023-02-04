import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cartSlice';

var initialRender = true;

function App() {
  const dispatch = useDispatch();
  const cartShow = useSelector(state => state.ui.cartShow);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {

    if(initialRender){
      initialRender = false;
      return;
    }
    dispatch(sendCartData(cart));

  }, [cart]);

  return (
    <Fragment>
      { notification && <Notification 
      status={notification.status}
      title={notification.title}
      message={notification.message}
      />}
    <Layout>
     {cartShow && <Cart /> }
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
