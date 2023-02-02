import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment } from 'react';
import Notification from './components/UI/Notification';
import { uiActions } from './store/index';

function App() {
  const dispatch = useDispatch();
  const cartShow = useSelector(state => state.ui.cartShow);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {


dispatch(uiActions.setNotification({
  status:'pending',
  title: 'Sending...',
  message: 'Sending cart data!'
}));
    const fetchHandler = async() => {
      const response = await fetch('https://react-http-c3510-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });
      if(!response.ok){
        throw new Error('Sending Cart details failed.');
      };

      dispatch(uiActions.setNotification({
        status:'success',
        title: 'Success!',
        message: 'Sent Cart data succesfully'
      }));
  };
fetchHandler().catch((error) => {
          dispatch(uiActions.setNotification({
            status:'error',
            title: 'Error!',
            message: error.message
          }));
        });

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
