import React, { useEffect, useRef, useState } from 'react';

import { useForm } from 'react-hook-form';

import { Col, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { H1, P1 } from '../../../util/StyledComponent/premadeComponent';
import { Input } from '../../../util/StyledComponent/input';
import { access_token } from '../../../configApi/config';
import { useDispatch, useSelector } from 'react-redux';

import { getCategory } from '../../../configApi/utilFunction';

import Select from 'react-select';
import { NotifyDanger } from '../../../util/notify';
import MySelect from '../../../util/select/select';
import { Submit, SubmitWithFile } from '../../../configApi/function';
import { resizeFile } from '../../../util/utilfunction';

const AddProductInput = () => {
	const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
	const onSubmit = async (data) => {
		console.log(data);

		// "name": "Food Superior",
		// "qty_left": 50,
		// "image": "https://dummyimage.com/915x878",
		// "description": "Center during business sea spend use court girl. Onto painting civil.\nOver thing age outside anything. Couple arm window actually claim early.\nOk weight top marriage relationship.",
		// "price": 8,
		// "discount": 20,
		// "categories": "diabetes",
		// "related_products": 34
		//const formDataimg = new FormData();

		// for (let i of uploaded_images) {
		// 	try {
		// 		const image = await resizeFile(i);
		// 		//console.log(image);
		// 		formDataimg.append('image', image);
		// 	} catch (err) {
		// 		console.log(err);
		// 	}
		// }
		const formData = new FormData();
		formData.append('name', data.name);
		formData.append('qty_left', data.qty_left);
		//formData.append('image', data.image);
		formData.append('description', data.productDescription);
		formData.append('price', data.expectedPrice);
		formData.append('discount', data.discount);
		for (let i of uploaded_images) {
			formData.append('uploaded_images', i);
		}

		const res = await SubmitWithFile(formData, '/product/add', 'post');
	};

	const [ uploaded_images, set_uploaded_images ] = useState([]);
	const [ image_url, set_image_url ] = useState([]);

	const setImages = (image) => {
		set_uploaded_images([ ...uploaded_images, image ]);
		let imgUrl = URL.createObjectURL(image);
		set_image_url([ ...image_url, imgUrl ]);
	};
	const categories = useSelector((state) => state.category.categories);

	//select things
	const options = categories.map((category) => {
		return { value: category.name, label: category.name };
	});

	useEffect(() => {
		getCategory();
	}, []);
	return (
		<Container>
			<FormBox>
				<PageName> Home/Product </PageName>
				<PageTitle> Add a New Product </PageTitle>
				<StyledForm onSubmit={handleSubmit(onSubmit)}>
					<StyledRow className="mt-5">
						<Col md={6}>
							<P1 weight="600" size="19.1339px" lineHeight="27px">
								{' '}
								Enter Product name{' '}
							</P1>
							<Input
								className="mt-2"
								placeholder="name"
								width="100%"
								height="2.5rem"
								{...register('name', { required: true })}
							/>
							{errors.name && <span className="fontcolor">This field is required</span>}
						</Col>
						<Col md={6}>
							<P1 weight="600" size="19.1339px" lineHeight="27px">
								{' '}
								Category{' '}
							</P1>

							<MySelect
								options={options}
								className="pselect"
								{...register('category')}
								control={control}
							/>
							{errors.category && <span className="fontcolor">This field is required</span>}
						</Col>
					</StyledRow>
					<StyledRow className="mt-3">
						<Col md={6}>
							<P1 weight="600" size="19.1339px" lineHeight="27px">
								{' '}
								Enter Expected Price{' '}
							</P1>
							<Input
								className="mt-2"
								placeholder="Price"
								width="100%"
								height="2.5rem"
								{...register('expectedPrice', { required: true })}
							/>
							{errors.expectedPrice && <span className="fontcolor">This field is required</span>}
						</Col>
						<Col md={6}>
							<P1 weight="600" size="19.1339px" lineHeight="27px">
								{' '}
								Enter Discount{' '}
							</P1>
							<Input
								className="mt-2"
								placeholder="Discount%"
								width="100%"
								height="2.5rem"
								{...register('discount', { required: true })}
							/>
							{errors.discount && <span className="fontcolor">This field is required</span>}
						</Col>
					</StyledRow>
					<StyledRow className="mt-3">
						<Col md={6}>
							<P1 weight="600" size="19.1339px" lineHeight="27px">
								{' '}
								Quantity left
							</P1>
							<Input
								className="mt-2"
								placeholder="qty_left"
								width="100%"
								height="2.5rem"
								{...register('qty_left', { required: true })}
							/>
							{errors.qty_left && <span className="fontcolor">This field is required</span>}
						</Col>
					</StyledRow>
					<StyledRow className="mt-3">
						<Col md={12}>
							<P1 weight="600" size="19.1339px" lineHeight="27px">
								{' '}
								Enter Product Description{' '}
							</P1>
							<StyledTextArea
								className="mt-2"
								placeholder="xyz name"
								{...register('productDescription', { required: true })}
							/>
							{errors.productDescription && <span className="fontcolor">This field is required</span>}
						</Col>
					</StyledRow>
					<StyledRow className="mt-3">
						<Col md={12}>
							<P1 weight="600" size="19.1339px" lineHeight="27px">
								{' '}
								Add vendor information (optional){' '}
							</P1>
							<StyledTextArea
								className="mt-2"
								placeholder="xyz name"
								{...register('vendorDescription', { required: true })}
							/>
							{errors.vendorDescription && <span className="fontcolor">This field is required</span>}
						</Col>
					</StyledRow>
					<StyledRow className="mt-3">
						<Col md={3}>
							<P1 weight="600" size="19.1339px" lineHeight="27px">
								{' '}
								Upload Product Images{' '}
							</P1>
							<StyledLabel htmlFor="files" className="mt-2">
								CHOOSE FILE
							</StyledLabel>
							<StyledInput
								id="files"
								type="file"
								accept="image/*"
								multiple
								onChange={(e) => {
									const file = e.target.files[0];
									//set_uploaded_images(uploaded_images + file);
									setImages(file);
									//console.log('imag3s', file);
								}}
							/>
						</Col>
					</StyledRow>
					<div className="pimgdiv">
						<H1 size="20">Uploaded images</H1>
						{image_url.map((image, index) => <img key={index} src={image} alt="pi" className="pimg" />)}
					</div>

					<StyledRow className="mt-3 justify-content-md-center">
						<Col md={3}>
							<StyledButtonWhite className="mt-2 outline" type="button">
								{' '}
								DISCARD CHANGES{' '}
							</StyledButtonWhite>
						</Col>
						<Col md={3}>
							<StyledButton className="mt-2" type="submit">
								{' '}
								UPLOAD PRODUCT{' '}
							</StyledButton>
						</Col>
					</StyledRow>
				</StyledForm>
			</FormBox>
		</Container>
	);
};

export default AddProductInput;

const Container = styled.div`
	width: 100vw;
	height: auto;
	background-color: #8BC34A33;
	padding: 0px;
	margin: 0px;
	overflow: hidden;
	.fontcolor {
		color: red;
	}
	.pimg {
		height: 200px;
		width: 200px;
		margin: 10px;
	}
	@media (max-width: 768px) {
		.pimg {
			height: 100px;
			width: 100px;
		}
	}
	.pimgdiv {
		margin: 36px;
	}
	.pselect {
		position: absolute;
		margin-top: 10px;
		background-color: #8BC34A33;
	}
`;

const FormBox = styled.div`
	width: 80vw;
	height: auto;
	margin-left: auto;
	margin-right: auto;
	margin-top: 2rem;
	margin-bottom: 2rem;
	padding-bottom: 3rem;
	background-color: #ffffff;
	overflow: hidden;
`;

const PageName = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 29px;
	color: #616161;
	margin-top: 5rem;
	margin-left: 3rem;
`;

const PageTitle = styled.div`
	font-family: 'Merriweather';
	font-style: normal;
	font-weight: 700;
	font-size: 28px;
	line-height: 43px;
	color: #000000;
	margin-top: 0.5rem;
	margin-left: 3rem;
`;

const StyledForm = styled(Form)`
    overflow: hidden;
`;

const StyledRow = styled(Row)`
    margin-left: 2.3rem;
    margin-right: 10rem;
    overflow: hidden;
`;

const StyledTextArea = styled.textarea`
	width: 100%;
	margin-right: 10%;
	background-color: #8BC34A33;
	border: 0px;
	resize: none;
	height: 8rem;
	overflow: hidden;
	-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
	-moz-box-sizing: border-box; /* Firefox, other Gecko */
	box-sizing: border-box; /* Opera/IE 8+ */
`;

const StyledInput = styled.input`display: none;`;

const StyledButton = styled.button`
	background-color: #8bc34a;
	border-radius: 4px;
	border: 1px;
	width: 100%;
	height: 2.4rem;
	color: #ffffff;
	font-style: normal;
	font-weight: 550;
	font-size: 17.6175px;
	line-height: 21px;
`;

const StyledLabel = styled.label`
	background-color: #8bc34a;
	border-radius: 4px;
	border: 1px;
	width: 100%;
	height: 2.4rem;
	color: #ffffff;
	font-style: normal;
	font-weight: 550;
	font-size: 17.6175px;
	line-height: 21px;
	padding-top: 0.5rem;
	text-align: center;
`;

const UploadInfo = styled.div`
	font-style: normal;
	font-weight: 600;
	font-size: 19.1339px;
	line-height: 27px;
	color: #616161;
	margin-top: 2.3rem;
`;

const StyledButtonWhite = styled.button`
	background-color: #ffffff;
	border-radius: 4px;
	border-color: #8bc34a;
	border: 2px solid;
	width: 100%;
	height: 2.4rem;
	color: #8bc34a;
	font-style: normal;
	font-weight: 550;
	font-size: 17.6175px;
	line-height: 21px;
`;
