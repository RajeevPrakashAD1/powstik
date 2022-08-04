import React from 'react';
import styled from 'styled-components';

import footerLogo from '../../../assets/powstik.png';
import appStore from '../../../assets/app-store.png';
import playStore from '../../../assets/play-store.png';
import facebook from '../../../assets/Vector.png';
import twitter from '../../../assets/Vector2.png';
import pinterest from '../../../assets/Vector3.png';
import instagram from '../../../assets/Vector4.png';
import linkedIn from '../../../assets/Vector5.png';

const Footer = () => {
	return (
		<Container>
			<Container1>
				<Column1>
					<Image0>
						<img src={footerLogo} alt="footerLogo" />
					</Image0>
				</Column1>
				<Column2>
					<Text1>About</Text1>
					<Text1>Terms of Service</Text1>
					<Text1>Privacy Policy</Text1>
					<Text1>Refund Policy</Text1>
					<Text1>Contact</Text1>
				</Column2>
				<Column3>
					<Text2>Coming Soon- Mobile Apps</Text2>
					<ImageContainer>
						<Image1>
							<img src={appStore} alt="appStore" />
						</Image1>
						<Image1>
							<img src={playStore} alt="playStore" />
						</Image1>
					</ImageContainer>
				</Column3>
			</Container1>
			<Line color="white" />
			<Container2>
				<Column4>
					<Text3>Copyright © 2022 | Aadya Nutrition Private Limited</Text3>
				</Column4>
				<Column5>
					<Image2>
						<img src={facebook} alt="facebook" />
					</Image2>
					<Image2>
						<img src={twitter} alt="twitter" />
					</Image2>
					<Image2>
						<img src={pinterest} alt="pinterest" />
					</Image2>
					<Image2>
						<img
							src={instagram}
							alt="instagram"
							onClick={() => window.open('https://www.instagram.com/powstik_nutrition/')}
						/>
					</Image2>
					<Image2>
						<img
							src={linkedIn}
							alt="linkedin"
							onClick={() => window.open('https://www.linkedin.com/company/powstik/')}
						/>
					</Image2>
				</Column5>
			</Container2>
		</Container>
	);
};

const Container = styled.div`
	background-color: #333333;
	max-width: 100vw;
	height: auto;
`;

const Container1 = styled.div`
	max-width: 100%;
	height: 100%;
	display: flex;
	margin-bottom: 5%;
	overflow: hidden;
	/* For iphone */
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
		flex-direction: column;
	}

	/* For galaxy phones */
	@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 2) {
		flex-direction: column;
	}

	/* For HTC Phones */
	@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) {
		flex-direction: column;
	}

	/* For Pixel Phones */
	@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) {
		flex-direction: column;
	}

	/* For iPad */
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
		flex-direction: column;
	}

	/* For Kindle */
	@media only screen and (min-device-width: 800px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 1.5) {
		flex-direction: column;
	}

	/* ----------- Non-Retina Screens ----------- */
	@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
	}

	/* ----------- Retina Screens ----------- */
	@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
	}
`;

const Image0 = styled.div`
	width: auto;
	height: auto;
	cursor: pointer;
`;

const Column1 = styled.div`
	height: fit-content;
	width: fit-content;
	border-radius: 0px;
	margin-top: 2%;
	margin-left: auto;
	margin-right: auto;
`;

const Column2 = styled.div`
	min-width: fit-content;
	height: fit-content;
	margin-top: 2%;
	margin-left: auto;
	margin-right: auto;
	padding-left: 5%;
`;

const Text1 = styled.div`
	color: white;
	//styleName: OS-SB-16;
	font-size: 16px;
	font-weight: 500;
	line-height: 22px;
	letter-spacing: 0em;
	text-align: left;
	cursor: pointer;
	width: fit-content;
`;

const Column3 = styled.div`
	width: auto;
	height: auto;
	margin-top: 2%;
	color: white;
	margin-left: auto;
	margin-right: auto;
	padding-left: 5%;
`;

const Text2 = styled.div`
	text-align: center;
	//styleName: MW-20;
	font-size: 20px;
	font-weight: 600;
	line-height: 25px;
	letter-spacing: 0em;
	min-width: 30vw;
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	cursor: pointer;
	width: 100%;
`;

const Image1 = styled.image`
	margin: 2%;
	width: auto;
	height: auto;
`;

const Line = ({ color }) => (
	<hr
		style={{
			color: color,
			height: 0
		}}
	/>
);

const Container2 = styled.div`
	color: #f6f6f6;
	max-width: 100%;
	height: auto;
	overflow: hidden;
	display: flex;
	justify-content: space-between;
`;

const Column4 = styled.div`
	height: auto;
	width: auto;
	border-radius: 0px;
	margin-top: 0.2%;
	margin-left: 6%;
`;

const Text3 = styled.div`
	//styleName: OS-SB-16;
	font-size: 16px;
	font-weight: 600;
	line-height: 22px;
	letter-spacing: 0em;
	text-align: left;
	width: auto;
	margin-bottom: 5%;
`;

const Column5 = styled.div`
	height: auto;
	width: auto;
	border-radius: 0px;
	margin-top: 0.2%;
	margin-right: 15.5%;
	display: flex;
	padding-left: 5%;
`;

const Image2 = styled.div`
	margin-right: 20%;
	cursor: pointer;
`;

export default Footer;
