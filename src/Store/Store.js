import { configureStore } from '@reduxjs/toolkit';

import messageReducer from './messageSlice/MessageSlice';
import userReducer from './userSlice/userSlice';
import productReducer from './productSlice/productSlice';
import categoryReducer from './categorySlice/categorySlice';
import cartReducer from './cartSlice/cartslice';
import CartSelectedItemReducer from './cartSelectedItemSlice/cartSelectedItemSlice';

export const store = configureStore({
	reducer: {
		message: messageReducer,
		user: userReducer,
		product: productReducer,
		category: categoryReducer,
		cart: cartReducer,
		cartSelectedItem: CartSelectedItemReducer
	}
});
