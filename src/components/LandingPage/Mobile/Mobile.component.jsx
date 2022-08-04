import React from 'react'
import { Container, MobileContainer, Mobile2Container, Container1, Mobileimage } from './Mobile.styles'
import { H1, P1 } from '../../../util/StyledComponent/premadeComponent';
import { Input } from '../../../util/StyledComponent/input';
import orImage from '../../../assets/Group 384.svg';
import QRImage from '../../../assets/Group 428.svg';
import MobileImage from '../../../assets/Group 394.svg';

const Mobile = () => {
    return (
        <Container >
            <MobileContainer>
                <Mobileimage src={MobileImage} alt="" />
                <Container1>
                    <H1>Get the powstik app</H1>
                    <ul>
                        <li>Get live order tracking</li>
                        <li>Get Latest Update features</li>
                    </ul>
                    <P1>We will send you a link Open it on your phone to download the app</P1>
                </Container1>
            </MobileContainer>
            <Mobile2Container>
                <Input />
                <img src={orImage} alt="Or" />
                <img src={QRImage} alt="QRcode" />
                <P1>OR simple way to download the powstik app
                    Scan QR code and download now</P1>
            </Mobile2Container>
        </Container>
    )
}

export default Mobile