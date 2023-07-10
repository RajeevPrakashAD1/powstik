import { addCategory } from '../Store/categorySlice/categorySlice';
import { Submit } from './function';
import { useDispatch } from 'react-redux';
import { store } from '../Store/Store';
import { addUser } from '../Store/userSlice/userSlice';
import { addProduct } from '../Store/productSlice/productSlice';
import { addCart } from '../Store/cartSlice/cartslice';
import { bufferToBase64 } from '../util/utilfunction';

export const getCategory = async () => {
	try {
		const res = await Submit({}, '/categories/', 'get');

		//const dispatch = useDispatch();
		console.log('calling distpatch', res);
		store.dispatch(addCategory(res.data));
	} catch (err) {
		console.log(err);
		return err;
	}
};

export const getUserDetails = async () => {
	try {
		const res = await Submit({}, '/userDetails', 'post');

		//const dispatch = useDispatch();
		if (res) store.dispatch(addUser(res.data.user));
	} catch (err) {
		console.log(err);
		return err;
	}
};

export const getProduct = async () => {
	try {
		const res = await Submit({}, '/products', 'get');

		//const dispatch = useDispatch();
		console.log('res Product', res);
		store.dispatch(addProduct(res.data.data));
	} catch (err) {
		console.log(err);
		return err;
	}
};

// export const addToCart = async () => {
// 	try {
// 		const res = await Submit({}, '/cart/', 'post');

// 		//const dispatch = useDispatch();
// 		store.dispatch(addProduct(res.data.result));
// 	} catch (err) {
// 		console.log(err);
// 		return err;
// 	}
// };
export const getCart = async (email) => {
	try {
		const res = await Submit({ email: email }, '/cart-items/', 'post');

		//const dispatch = useDispatch();
		console.log('items', res.data.cartItems);
		store.dispatch(addCart(res.data.cartItems));
	} catch (err) {
		console.log(err);
		return err;
	}
};

export const bufToImg = (data) => {
	var imageSource = `data:image/jpeg;base64,${bufferToBase64(data)}`;
	return imageSource;
};
