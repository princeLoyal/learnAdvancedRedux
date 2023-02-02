import { createSlice, configureStore } from "@reduxjs/toolkit";
import cartReducer from '../store/cartSlice';
const initialCartSlice = { cartShow: true, notification: null}
const uiSlice = createSlice({
    name: 'cartShow',
    initialState: initialCartSlice,
    reducers: {
        cartShow(state){
            state.cartShow = !state.cartShow
        },
        setNotification(state, action){
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
});
const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart: cartReducer}
});

export const uiActions = uiSlice.actions;
export default store;