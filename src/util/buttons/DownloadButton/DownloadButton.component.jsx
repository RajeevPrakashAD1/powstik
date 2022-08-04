import React from 'react';
import { Wrapper } from './DownloadButton.styles'
const DownloadButton = ({ children }) => {
    return (
        <React.Fragment>
            <Wrapper>
                {children}
            </Wrapper>
        </React.Fragment>
    );
};

export default DownloadButton;

