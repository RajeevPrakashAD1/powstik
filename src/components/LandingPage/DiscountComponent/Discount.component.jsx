import React from 'react'
import { DiscountContainer, DiscountDescription, DiscountDownload, Text1, TicketContainer } from './Discount.styles'
import TicketImage from '../../../assets/Group 364.svg'
import { H1, P1 } from '../../../util/StyledComponent/premadeComponent.js';
import { Wrapper } from '../../../util/buttons/DownloadButton/DownloadButton.styles';
const DiscountBar = () => {
    return (
        <DiscountContainer>
            <TicketContainer>
                <img src={TicketImage} alt="Ticket" />
            </TicketContainer>
            <DiscountDescription>
                <H1 size='36' lineHeight='45.25' color='black' >Welcome to <Text1>Powstik</Text1></H1>
                <P1 size='22' lineHeight='27.65' color='black' weight='700'>Download the app and get <Text1>25% off</Text1> on the first order!</P1>
            </DiscountDescription>
            <DiscountDownload >
                <Wrapper to='/account-details' >Download Now</Wrapper>
            </DiscountDownload>
        </DiscountContainer>
    )
}

export default DiscountBar