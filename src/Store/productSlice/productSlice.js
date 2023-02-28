import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	product: [
		{
			product_id: 1,
			discount: 30,
			subtitle: 'subtitle....',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsn3cesnLNwc0e7jku8q0AK2A2-zx2zWemA&usqp=CAU',
			subtitle: 'subtitle',
			description: 'description dasjkas lorem90 dakja adjask a das dsakjkdsa sds aj dasj fjdka asj asd',

			price: '1000',
			category: 'Health',
			name: 'name',
			categories: [ 'diabetes' ]
		},
		{
			product_id: 2,
			discount: 30,
			subtitle: 'subtitle....',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsn3cesnLNwc0e7jku8q0AK2A2-zx2zWemA&usqp=CAU',
			subtitle: 'subtitle',
			description: 'description dasjkas lorem90 dakja adjask a das dsakjkdsa sds aj dasj fjdka asj asd',

			price: '1000',
			category: 'Health',
			name: 'name',
			categories: [ 'diabetes' ]
		},
		{
			product_id: 3,
			discount: 30,
			subtitle: 'subtitle....',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsn3cesnLNwc0e7jku8q0AK2A2-zx2zWemA&usqp=CAU',
			subtitle: 'subtitle',
			description: 'description dasjkas lorem90 dakja adjask a das dsakjkdsa sds aj dasj fjdka asj asd',

			price: '1000',
			category: 'Health',
			name: 'name',
			categories: [ 'diabetes' ]
		},
		{
			product_id: 4,
			discount: 30,
			subtitle: 'subtitle....',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsn3cesnLNwc0e7jku8q0AK2A2-zx2zWemA&usqp=CAU',
			subtitle: 'subtitle',
			description: 'description dasjkas lorem90 dakja adjask a das dsakjkdsa sds aj dasj fjdka asj asd',

			price: '1000',
			category: 'Health',
			name: 'name',
			categories: [ 'diabetes' ]
		},
		{
			product_id: 5,
			discount: 30,
			subtitle: 'subtitle....',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsn3cesnLNwc0e7jku8q0AK2A2-zx2zWemA&usqp=CAU',
			subtitle: 'subtitle',
			description: 'description dasjkas lorem90 dakja adjask a das dsakjkdsa sds aj dasj fjdka asj asd',

			price: '1000',
			category: 'Health',
			name: 'name',
			categories: [ 'diabetes' ]
		}
	]
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			// console.log('red=', action.payload);
			// console.log('user', state, action);
			if (action.payload.length > 0) {
				state.product = action.payload;
			}
			// if (state.messageArray[action.payload.roomId]) {user
			// 	state.messageArray[action.payload.roomId].push(action.payload);
			// } else {
			// 	state.messageArray[action.payload.roomId] = [ action.payload ];
			// }
		}
	}
});

// Action creators are generated for each case reducer function
export const { addProduct } = productSlice.actions;

export default productSlice.reducer;

// id={product.product_id}
// discount={product.discount}
// image={product.image}
// //subtitle={product.subtitle}
// description={product.description}
// price={product.price}
