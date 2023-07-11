import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function NotifySuccess(message) {
	toast.success(message);
	console.log(message);

	return <ToastContainer />;
}
export function NotifyDanger(message) {
	toast.error(message);
	console.log('calling danger', message);

	return <ToastContainer />;
}
export function Toastcontainer() {
	return <ToastContainer />;
}
