// import { Submit } from './function';
import Resizer from 'react-image-file-resizer';

import { store } from '../Store/Store';

import { addCart } from '../Store/cartSlice/cartslice';

export const addToCart = async (id) => {
	const cart = await store.getState().cart.cart;
	if (cart.includes(id)) {
		return 'already in cart';
	} else {
		store.dispatch(addCart([ id ]));
		return 'added to cart';
	}
};

export const resizeFile = (file) =>
	new Promise((resolve) => {
		Resizer.imageFileResizer(
			file,
			300,
			300,
			'JPEG',
			100,
			0,
			(uri) => {
				resolve(uri);
			},
			'base64'
		);
	});

export const bufferToBase64 = (buffer) => {
	let binary = '';
	const bytes = new Uint8Array(buffer);
	const len = bytes.byteLength;
	for (let i = 0; i < len; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return window.btoa(binary);
};

export const bufToImg = (data) => {
	var imageSource = `data:image/jpeg;base64,${bufferToBase64(data)}`;
	return imageSource;
};
