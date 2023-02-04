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
alert('hshshs')
        try {
        const getRequest = async () => {
            const response = await fetch('https://react-http-c3510-default-rtdb.firebaseio.com/cart.json');
            const data = await response.json();
alert(data.totalQuantity)
alert(data.items)
            dispatch(cartActions.replaceCart({
               totalQuantity: data.totalQuantity,
               items: data.items
            }));
        }
        } catch(error) {

        }
    };
};
