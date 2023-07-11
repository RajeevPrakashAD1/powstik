import React from 'react';

const NoRoutes = ({ screen }) => {
	if (screen) return <div>No such Route</div>;
	else {
		return <h1>mobile version will be ready soon plz wait!</h1>;
	}
};
export default NoRoutes;
