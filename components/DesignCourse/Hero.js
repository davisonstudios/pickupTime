import styled from "styled-components"
import logo from '../../images/Logo.svg'
import Image from "next/image"

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
    font-family: 'Josefin Slab';
    font-size: 1.5em;
    line-height: 1.5em;
    z-index: 5;
`

const ImageWrapper = styled.div`
    position: absolute;
    margin-right: 10%;
    align-self: end;
    z-index: 2;
    transform: skew(-20deg, 0deg);
    opacity: 0.5;
    /* background-color: aqua; */
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
            <Image src={logo.src} width={250} height={250} />
        </ImageWrapper>
    </Container>
}

export default Hero