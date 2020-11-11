import React, {useRef, useEffect} from 'react';

import { Container, WrapperContainer } from './styles';

import AddButton from '../AddBusinessButton';
import ServerButton from '../ServerButton';

function ChannelData() {
    const wrapperRef = useRef();

    useEffect(() => {
        const div = wrapperRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [wrapperRef]);

    return (
        <Container>
            <WrapperContainer ref={wrapperRef}> 
                {Array.from(Array(100).keys()).map((n) => (
                    <ServerButton/>
                ))}
            </WrapperContainer>
            <AddButton/>
        </Container>
    );
}

export default ChannelData;