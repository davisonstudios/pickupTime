import styled from "styled-components"
import Image from "next/image"
// import Card from "../card"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    width: 20%;
    margin: 50px 0 50px;
    text-align: center;
    color: white;
`
const Title = styled.div`
    font-family: 'Righteous';
    font-size: 2rem;
    font-weight: bold;
    padding: 30px 0 10px;
`
const Details = styled.div`
    font-family: 'Josefin Slab';
    font-size: 20px;
`

const DesignCard = (props) => {
    const {icon, title, details} = props

    return (
        <Container>
            <Image src={icon.src} width={50} height={50} />
            <Title>{title}</Title>
            <Details>{details}</Details>
        </Container>
    )
}

export default DesignCard