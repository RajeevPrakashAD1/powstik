import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import styled from 'styled-components';
import { Controller } from 'react-hook-form';

const customStyles = {
	// menu: (provided, state) => ({
	// 	...provided,
	// 	width: state.selectProps.width,
	// 	color: state.selectProps.menuColor,
	// 	padding: 10
	// }),
	control: (_, { selectProps: { width } }) => ({
		width: width
	})
	// singleValue: (provided, state) => {
	// 	const opacity = state.isDisabled ? 0.5 : 1;
	// 	return { ...provided, opacity };
	// }
	//hi
};

const MySelect = ({ name, control, options }) => {
	//console.log('optins', options);
	return (
		<React.Fragment>
			<Wrapper>
				<Controller
					name={name}
					control={control}
					// rules={{ required: true }}
					render={({ field }) => (
						<Select {...field} className="pselect" classNamePrefix="select" options={options} />
					)}
				/>
			</Wrapper>
		</React.Fragment>
	);
};
export default MySelect;
const Wrapper = styled.div`
	.pselect {
		width: 330px !important;
		border: none;
		position: absolute;

		background-color: #8BC34A33 !important;
	}
	@media (max-width: 768px) {
		.pselect {
			width: 130px !important;
			margin-bottom: 130px !important;
		}
	}
`;
