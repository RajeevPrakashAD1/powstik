import React from 'react';
import {
	Description,
	DescriptionImageContainer,
	DescriptionWrapper,
	Diseases,
	NutritionWork,
	Rating
} from './WebsiteDescription.styles';
import Image from '../../../assets/organic-products-hero 1 (1).png';
import BookButton from '../../../util/buttons/ShopNowButton';

function WebsiteDescription() {
	return (
		<DescriptionWrapper>
			<Description>
				<Diseases>
					Geriatrics, Nephrology, Obesity, Diabetes, Hyperlipidemia, Hypertension, Obstetrics, Paediatrics... {' '}
					{' '}
				</Diseases>{' '}
				 <NutritionWork> Specialty Nutrition That Works! </NutritionWork> {' '}
				<Rating> Highest Rated Regional Vendors </Rating> <BookButton />
			</Description>{' '}
			{' '}
			<DescriptionImageContainer>
				<img src={Image} alt="Some Product" style={{ minHeight: 350, minWidth: 400 }} /> {' '}
			</DescriptionImageContainer>{' '}
			{' '}
		</DescriptionWrapper>
	);
}

export default WebsiteDescription;
