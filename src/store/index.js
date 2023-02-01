import { createSlice, configureStore } from "@reduxjs/toolkit";
import cartReducer from '../store/cartSlice';
const initialCartSlice = { cartShow: true }
const uiSlice = createSlice({
    name: 'cartShow',
    initialState: initialCartSlice,
    reducers: {
        cartShow(state){
            state.cartShow = !state.cartShow
        }
    }
});
const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart: cartReducer}
});

export const uiActions = uiSlice.actions;
export default store;