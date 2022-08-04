import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cart: [ '1' ]
};

export const CartSlice = createSlice({
	name: 'Cart',
	initialState,
	reducers: {
		addCart: (state, action) => {
			//console.log('action = ' + action, state);
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			// console.log('red=', action.payload);
			//console.log('cart', state, action);
			state.cart = [ ...state.cart, action.payload ];
			// if (state.messageArray[action.payload.roomId]) {user
			// 	state.messageArray[action.payload.roomId].push(action.payload);
			// } else {
			// 	state.messageArray[action.payload.roomId] = [ action.payload ];
			// }
		},
		removeCart: (state, action) => {
			// console.log('cartslice', action);
			state.cart = state.cart.filter((item) => item !== action.payload.id);
		}
	}
});

// Action creators are generated for each case reducer function
export const { addCart, removeCart } = CartSlice.actions;

export default CartSlice.reducer;
