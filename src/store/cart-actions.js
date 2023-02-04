import { uiActions } from "./index";
import { cartActions } from "./cartSlice";

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.setNotification({
            status:'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }));

        const sendRequest = async () => {
            const response = await fetch('https://react-http-c3510-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });

            if(!response.ok){
                throw new Error('Sending Cart details failed.');
            };
        };
        try {
            await sendRequest();
            dispatch(uiActions.setNotification({
                status:'success',
                title: 'Success!',
                message: 'Sent Cart data succesfully'
              }));
        } catch (error) {
            dispatch(uiActions.setNotification({
                status:'error',
                title: 'Error!',
                message: 'Sending Cart details failed.'
              }));
        }
    };
};

export const getCartData = () => {
    return async (dispatch) => {
       dispatch(uiActions.setNotification({
            status:'Ongoing',
            title: 'Retrieving...',
            message: 'Getting cart data!'
        }));
        try {
        const getRequest = async () => {
            const response = await fetch('https://react-http-c3510-default-rtdb.firebaseio.com/cart.json');
            const data = await response.json();
            dispatch(cartActions.replaceCart({
               totalQuantity: data.totalQuantity,
               items: data.items
            }));
        }
          await getRequest();
          dispatch(uiActions.setNotification({
                status:'success',
                title: 'Success!',
                message: 'Got Cart data succesfully'
              }));
        } catch(error) {
          dispatch(uiActions.setNotification({
                status:'error',
                title: 'Error!',
                message: 'Retrieving Cart data failed.'
              }));
        }
    };
};
