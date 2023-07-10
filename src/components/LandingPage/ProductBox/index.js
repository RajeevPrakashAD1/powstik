import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CardHeaders from '../cardHeaders';
import CardSlider from '../SlickSlider';
import { getProduct, getCategory } from './../../../configApi/utilFunction';

const ProductBox = () => {
	const [ geriatrics, setGeriatrics ] = useState([]);
	const [ motherAndBaby, setMotherAndBaby ] = useState([]);
	const [ metabolics, setMetabolics ] = useState([]);

	let categories = useSelector((state) => state.category.categories).slice(0, 3);
	const product = useSelector((state) => state.product.product);

	useEffect(() => {
		getCategory();
		getProduct();
	}, []);

	return (
		<div>
			{categories.map((item, index) => {
				return (
					<React.Fragment>
						<CardHeaders key={index} main={item.name} sub={item.description} />
						<CardSlider category={item.name} />
						{/* products={product.filter((product) => product.category === item.category_name)} */}
					</React.Fragment>
				);
			})}
			{/* <CardSlider /> */}
		</div>
	);
};

{
	/* <CardHeaders
				main="Geriatrics"
				sub="Nutrition solutions for common health conditions in ageing men and women. "
			/>
			<CardSlider />
			<CardHeaders
				main="Metabolics"
				sub="Research led Low carb substitutes, Proteins etc to tackle Diabetes & obesity. "
			/>
			<CardSlider />
			<CardHeaders
				main="Mother & Child"
				sub="Choicest Groceries, Pulses, Millets, and cereals from around your country. "
			/>
			<CardSlider /> */
}
// 		</div>
// 	);
// };

export default ProductBox;
