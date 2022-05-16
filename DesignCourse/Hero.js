import styled from "styled-components"
import { SiteLogo } from "./Assets/svgs"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 300px;
    margin: 100px 0 0;
    /* background-color: aquamarine; */
`

const Title = styled.div`
    align-self: flex-start;
    font-family: 'Koulen';
    font-size: 4em;
    line-height: 1em;
    z-index: 5;
`

const Detail = styled.div`
    font-family: 'Roboto Flex';
    font-size: 1.5em;
    line-height: 1.5em;
    z-index: 5;
`

const ImageWrapper = styled.div`
    position: absolute;
    margin-right: 10%;
    align-self: end;
    z-index: 2;
    /* background-color: aqua; */
    animation: skewy 2s ease-in-out infinite alternate;
    @keyframes skewy {
        from {
            transform: skew(-15deg, 0deg);
            color: #0f0;
            opacity: 0.5;
        }
        to {
            transform: skew(-10deg, 0deg);
            color: #0bb;
            opacity: 0.05;
        }
    }
   @media screen and (max-width: 900px) {
        visibility: hidden;
    }
`

const Hero = () => {
    
    return <Container>
        <Title>
            Kickstart your<br />
            UI/UX Design Career<br />
        </Title>
        <Detail>
            Our Interactive UI/UX Course will help you design better & earn more.
        </Detail>
        <ImageWrapper>
            <SiteLogo height='250' width='250' />
        </ImageWrapper>
    </Container>
}

export default Hero