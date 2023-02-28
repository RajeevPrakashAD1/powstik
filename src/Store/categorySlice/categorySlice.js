import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categories: [
		{
			category_name: 'Diabetes',
			description: 'this is an example of description ',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsn3cesnLNwc0e7jku8q0AK2A2-zx2zWemA&usqp=CAU',
			category_description: 'this is an example of description'
		},
		{
			category_name: 'Diabetes',
			description: 'this is an example of description ',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsn3cesnLNwc0e7jku8q0AK2A2-zx2zWemA&usqp=CAU'
		},
		{
			category_name: 'Diabetes',
			description: 'this is an example of description ',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsn3cesnLNwc0e7jku8q0AK2A2-zx2zWemA&usqp=CAU'
		}
	]
};

export const CategorySlice = createSlice({
	name: 'Category',
	initialState,
	reducers: {
		addCategory: (state, action) => {
			//console.log('action = ' + action, state);
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			// console.log('red=', action.payload);
			// console.log('user', state, action);
			// console.log('...category', action.payload);
			if (action.payload.length > 0) {
				state.categories = action.payload;
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
export const { addCategory } = CategorySlice.actions;

export default CategorySlice.reducer;
