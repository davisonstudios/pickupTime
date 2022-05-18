import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    margin: 50px 0 30px;
`
const Title = styled.div`
    font-family: 'Righteous';
    font-size: 2rem;
    font-weight: bold;
    padding: 30px 0 10px;
    color: ${({theme}) => theme.colors.headlines};
`
const Details = styled.div`
    font-family: 'Roboto Flex';
    font-size: 20px;
    color: ${({theme}) => theme.colors.text};
`

const ColoredIcon = styled.div`
    color: ${({theme}) => theme.colors.icons};
    width: 50px;
    height: 50px;
`

const DesignCard = (props) => {
    const {title, details} = props
    const Icon = <props.icon />

    return (
        <Container>
            <ColoredIcon>{Icon}</ColoredIcon>
            <Title>{title}</Title>
            <Details>{details}</Details>
        </Container>
    )
}

export default DesignCard