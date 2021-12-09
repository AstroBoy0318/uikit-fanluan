import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Flex";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { CloseIcon } from "../../components/Svg";

const FlexContainer = styled(Flex)`
    disply: flex;
    position: relative;
    padding: 10px 0;
    background: linear-gradient(rgb(128, 81, 214) 0%, rgb(73, 34, 134) 100%);
    justify-content: center;
`;

const FlexMsg = styled(Flex)`
    background: rgba(39, 38, 44, 0.4);
    padding: 0 25px;
    border-radius: 20px;
    min-height: 60px;
    align-items: center;
    flex-wrap: wrap;
    &>div{
        white-space: nowrap;
    }
`;

interface Props {
    toggleValue: any;
    setClosedWarning: any;
}

const Warning: React.FC<Props> = ({ setClosedWarning, toggleValue }) => {

    const handler = () => {
        setClosedWarning(true);
        toggleValue();
    }
    return (
        <FlexContainer>
            <FlexMsg>
                <Text bold color="primary">PHISHING WARNING:</Text>
                <Text color="textSubtle" pl="5px">please make sure you are visiting</Text>
                <Text bold paddingX="5px">https://app.fanluan.finance</Text>
                <Text color="textSubtle">- check the URL carefully.</Text>
            </FlexMsg>

            <Button variant="secondary" size="sm" padding={0} style={{ border: "none", position: "absolute", top: "calc(50% - 16px)", right: "10px" }} onClick={handler}>
                <CloseIcon />
            </Button>
        </FlexContainer>
    )
}

export default Warning;