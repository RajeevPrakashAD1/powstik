import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../Store/userSlice/userSlice';
import { Submit } from './function';

const FetchUserDetails = () => {
	const token = localStorage.getItem('token');
	const dispatch = useDispatch();

	useEffect(
		() => {
			const fetchUser = async () => {
				if (token) {
					try {
						const response = await Submit({}, '/userDetails', 'post');
						if (response.data) {
							const userDetails = response.data.user;
							console.log('dispatching', userDetails);
							dispatch(addUser(userDetails));
						}
					} catch (error) {
						// Handle error cases, such as token validation failure or API request errors
						console.error('Error fetching user details:', error);
						throw error;
					}
				}
			};

			fetchUser();
		},
		[ token, dispatch ]
	);

	return null;
};

export default FetchUserDetails;
