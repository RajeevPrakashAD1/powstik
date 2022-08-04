export const SaveToLocal = (state) => {
	try {
		localStorage.setItem('state', JSON.stringify(state));
		console.log('user saved to local storage');
	} catch (err) {
		console.log(err);
	}
};

export const LoadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		console.log(err);
		return undefined;
	}
	console.log('load state called');
};
