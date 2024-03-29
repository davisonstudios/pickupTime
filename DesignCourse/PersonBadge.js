import Image from "next/image"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    column-gap: 10px;
    color: ${({theme}) => theme.colors.accent};
`

const Circle = styled.div`
    width: 35px;
    height: 35px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${({theme}) => theme.colors.accent};
    overflow: hidden;
`

const Name = styled.p`
    font-family: 'Roboto Flex';
    font-weight: 600;
`

const PersonBadge = (props) => {
    const {name, imageSrc} = props

    return <Container>
        <Circle>
            <Image src={imageSrc} width='35px' height='35px' />
        </Circle>
        <Name>{name}</Name>
    </Container>
}

export default PersonBadge