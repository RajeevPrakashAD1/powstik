import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const FilterContainer = styled.div`
	background-color: #f2f2f2;
	padding: 20px;
	border-radius: 8px;
`;

const FilterCheckbox = styled.label`
	display: block;
	margin-bottom: 10px;
`;

const FilterButton = styled.button`
	background-color: #4caf50;
	color: white;
	border: none;
	padding: 10px 20px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background-color: #45a049;
	}
`;

const FilterComponent = ({ onFilterChange }) => {
	const categories = useSelector((state) => state.category.categories);
	const [ selectedCategories, setSelectedCategories ] = useState(categories.map((category) => category.name));

	const handleCategoryChange = (event) => {
		const { value, checked } = event.target;

		if (checked) {
			setSelectedCategories((prevSelected) => [ ...prevSelected, value ]);
		} else {
			setSelectedCategories((prevSelected) => prevSelected.filter((category) => category !== value));
		}
	};

	const handleApplyFilter = () => {
		onFilterChange(selectedCategories);
	};

	return (
		<FilterContainer>
			<h3>Filter by Category:</h3>
			{categories.map((category) => (
				<FilterCheckbox key={category.name}>
					<input
						type="checkbox"
						value={category.name}
						checked={selectedCategories.includes(category.name)}
						onChange={handleCategoryChange}
					/>
					{category.name}
				</FilterCheckbox>
			))}
			<FilterButton onClick={handleApplyFilter}>Apply Filter</FilterButton>
		</FilterContainer>
	);
};

export default FilterComponent;
