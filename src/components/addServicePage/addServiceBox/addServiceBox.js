import React, {useRef} from 'react';

import { useForm } from "react-hook-form";

import { Col, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { P1 } from '../../../util/StyledComponent/premadeComponent';
import { Input } from '../../../util/StyledComponent/input';


const AddServiceBox = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
		// const res = await Submit(data, '/user/login', 'post');
		// console.log('res......', res);
		// if (res.status === 200) {
		// 	localStorage.setItem('access', res.data.access);
		// 	localStorage.setItem('isLoggedIn', true);
		// 	console.log('locally saved');
		// }
        console.log(data)
    }
  return (
    <Container>
        <FormBox>
            <PageName> Home/Service </PageName>
            <PageTitle> Add a New Service </PageTitle>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledRow className="mt-5">
                    <Col md={6} >
                    <P1 weight="600" size="19.1339px" lineHeight="27px"> Enter Service name </P1>
                    <Input className="mt-2" placeholder="xyz name" width="100%" height="2.5rem" {...register('addService', { required: true })}/>
                    {errors.addService && <span className="fontcolor">This field is required</span>}
                    </Col>
                    <Col md={6}>
                    <P1 weight="600" size="19.1339px" lineHeight="27px"> Service Provider ID </P1>
                    <Input className="mt-2" placeholder="Service Provider ID" width="100%" height="2.5rem" {...register('serviceProviderID', { required: true })}/>
                    {errors.serviceProviderID && <span className="fontcolor">This field is required</span>}
                    </Col>
                </StyledRow>
                <StyledRow className="mt-3">
                    <Col md={6}>
                    <P1 weight="600" size="19.1339px" lineHeight="27px"> Enter Expected Price </P1>
                    <Input className="mt-2" placeholder="Price" width="100%" height="2.5rem" {...register('expectedPrice', { required: true })}/>
                    {errors.expectedPrice && <span className="fontcolor">This field is required</span>}
                    </Col>
                    <Col md={6}>
                    <P1 weight="600" size="19.1339px" lineHeight="27px"> Enter Discount </P1>
                    <Input className="mt-2" placeholder="Discount%" width="100%" height="2.5rem" {...register('discount', { required: true })}/>
                    {errors.discount && <span className="fontcolor">This field is required</span>}
                    </Col>
                </StyledRow>
                <StyledRow className="mt-3">
                    <Col md={12}>
                        <P1 weight="600" size="19.1339px" lineHeight="27px"> Enter Service Description </P1>
                        <StyledTextArea  className="mt-2" placeholder="xyz name" {...register('serviceDescription', { required: true })}/>
                        {errors.serviceDescription && <span className="fontcolor">This field is required</span>}
                    </Col>
                </StyledRow>
                <StyledRow className="mt-3">
                    <Col md={12}>
                        <P1 weight="600" size="19.1339px" lineHeight="27px"> Add Service Provider information (optional) </P1>
                        <StyledTextArea className="mt-2" placeholder="xyz name" {...register('serviceProviderInformation', { required: true })}/>
                        {errors.serviceProviderInformation && <span className="fontcolor">This field is required</span>}
                    </Col>
                </StyledRow>
                <StyledRow className="mt-3">
                    <Col md={3}>
                        <P1 weight="600" size="19.1339px" lineHeight="27px"> Upload Product Images </P1>
                        <StyledLabel for="files" className="mt-2"> 
                            CHOOSE FILE 
                        </StyledLabel>
                        <StyledInput id="files" type="file" accept="image/*" multiple/>
                    </Col>
                    <Col md={3}>
                            <UploadInfo> 1 Image Uploaded </UploadInfo>
                    </Col>
                </StyledRow>
                <StyledRow className="mt-3">
                    <Col md={12}>
                        <StyledTextArea className="mt-2" placeholder="upload image here" {...register('images', { required: true })}/>
                        {errors.images && <span className="fontcolor">This field is required</span>}
                    </Col>
                </StyledRow>
                <StyledRow className="mt-3 justify-content-md-center">
                    <Col md={3}>
                        <StyledButtonWhite className="mt-2 outline" type="button"> DISCARD CHANGES </StyledButtonWhite>
                    </Col>
                    <Col md={3}>
                        <StyledButton className="mt-2" type="submit">  UPLOAD PRODUCT </StyledButton>
                    </Col>
                </StyledRow>
            </StyledForm>
        </FormBox>
    </Container>
  )
}

export default AddServiceBox;

const Container = styled.div`
	width: 100vw;
	height: auto;
	background-color: #8BC34A33;
	padding: 0px;
	margin: 0px;
	overflow: hidden;
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
